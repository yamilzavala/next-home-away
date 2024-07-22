'use server'
import { profileSchema, validateWithZodSchema } from "./schemas";
import db from './db';
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

//helper
const getAuthUser = async () => {
   const user = await currentUser();
   if(!user) throw new Error('You must be logged in to access this route')
   if(!user.privateMetadata.hasProfile) redirect('/profile/create')
   return user;
}

//helper
const renderError = (error:unknown):{message:string} => {
   console.log(error);
   return {
      message: error instanceof Error ? error.message : 'There was an error'
   }
}

export const createProfileAction = async (prevState:any, formData: FormData) => {
   try {
    const user = await currentUser();
    if(!user) throw new Error('Please login to create a new profile')
    
    //Server component
    const rawData = Object.fromEntries(formData);
    //Zod validations
    const validatedFields = validateWithZodSchema(profileSchema, rawData)

    //ORM
    await db.profile.create({
      data:{
         clerkId: user.id,
         email: user.emailAddresses[0].emailAddress,
         profileImage: user.imageUrl ?? '',
         ...validatedFields
      }
    })

    //Crerk
    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
         hasProfile: true
      }
    })
   } catch (error) {
    return renderError(error)
   }
   redirect('/')
}

export const fetchProfileImage = async () => {
   try {
      const user = await currentUser(); 
      if(!user) return null;  
      const profile = await db.profile.findUnique({
         where: {
            clerkId: user.id
         },
         select: {
            profileImage: true
         }
      })
      return profile?.profileImage
   } catch (error) {
      return {
         message: error instanceof Error ? error.message : 'There was an error fetching profile image'
      }
   }   
}

export const fetchProfile = async () => {
   const user = await getAuthUser();
   const profile = db.profile.findUnique({
      where: {
         clerkId: user.id
      }
   })
   if(!profile) redirect('/profile/create')
   return profile;
}

export const updateProfileAction = async (prevState: any, formData: FormData):Promise<{message: string}> => {
   const user = await getAuthUser();

   try {
      const rawData = Object.fromEntries(formData)
      const validatedFields = validateWithZodSchema(profileSchema, rawData)
               
      await db.profile.update({
         where: {
            clerkId: user.id
         },
         data: validatedFields
      })
      revalidatePath('/profile')
      return {message: 'Profile updated successfully'}
   } catch (error) {
      return renderError(error)
   }
}

export const updateProfileImageAction = async (prevState: any, formData: FormData): Promise<{message: string}> => {
   return {message: 'Profile image updated successfully'}
}