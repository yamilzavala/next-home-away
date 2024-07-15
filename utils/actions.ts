'use server'
import { profileSchema } from "./schemas";
import prisma from './db';
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createProfileAction = async (prevState:any, formData: FormData) => {
   try {
    const user = await currentUser();
    if(!user) throw new Error('Please login to create a new profile')
    
    //Server component
    const rawData = Object.fromEntries(formData);
    //Zod validations
    const validatedFields = profileSchema.parse(rawData)

    //ORM
    await prisma.profile.create({
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
    return {
      message: error instanceof Error ? error.message : 'There was an error creating profile'
    }
   }
   redirect('/')
}

export const fetchProfileImage = async () => {
   try {
      const user = await currentUser(); 
      if(!user) return null;  
      const profile = await prisma.profile.findUnique({
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