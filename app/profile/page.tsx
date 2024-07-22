import FormContainer from '@/components/form/FormContainer';
import { updateProfileAction, fetchProfile, updateProfileImageAction } from '@/utils/actions';
import FormInput from '@/components/form/FormInput';
import SubmitButton from '@/components/form/Buttons';
import ImageInputContainer from '@/components/form/ImageInputContainer';

async function ProfilePage() {
    const profile = await fetchProfile();

    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">
                user profile
            </h1>
            <div className='border p-8 rounded-md'>
                {/* image input container */}
                <ImageInputContainer 
                    image={profile.profileImage}
                    name={profile.username} 
                    action={updateProfileImageAction} 
                    text='Update Profile Image'
                />
                
                <FormContainer action={updateProfileAction}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput id="firstName" name="firstName" label="First Name" type="text" defaultValue={profile?.firstName}/>
                        <FormInput id="lastName" name="lastName" label="Last Name" type="text" defaultValue={profile?.lastName}/>
                        <FormInput id="username" name="username" label="User Name" type="text" defaultValue={profile?.username}/>
                    </div>
                    <SubmitButton text='update profile' className="mt-8"/>
                </FormContainer>
            </div>
        </section>
    )
}
export default ProfilePage;