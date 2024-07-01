import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer';
import SubmitButton from '@/components/form/Buttons';
import { createProfileAction } from '@/utils/actions';

export default function CreateProfile() {
  return (
    <section>
        <h1 className="text-2xl font-semibold mb-8 capitalize">
            new user
        </h1>
        <div className='border p-8 rounded-md'>
            <FormContainer action={createProfileAction}>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <FormInput id="firstName" name="firstName" label="First Name" type="text" defaultValue='yamil'/>
                    <FormInput id="lastName" name="lastName" label="Last Name" type="text" defaultValue='josua'/>
                    <FormInput id="username" name="username" label="User Name" type="text" defaultValue='yjosua'/>
                </div>
                <SubmitButton text='Create Profile' className="mt-8"/>
            </FormContainer>
        </div>
    </section>
  )
}
