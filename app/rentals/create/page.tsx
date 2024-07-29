import React from 'react'
import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer'
import { createPropertyAction } from '@/utils/actions';
import { SubmitButton } from '@/components/form/Buttons';

export default function page() {
  return (
    <section>
        <h1 className='text-2xl font-semibold mb-8 capitalize'>create property</h1>
        <div className='border p-8 rounded'>
            <h3 className='text-lg bb-4 font-medium'>general info</h3>
            <FormContainer action={createPropertyAction}>
                <FormInput 
                    name='name'
                    type='text'
                    label='Name (20 limit)'
                    defaultValue='Cabin in latvia'
                />
                <FormInput 
                    name='tagline'
                    type='text'
                    label='Name (30 limit)'
                    defaultValue='Dream Getaway Awaits You Here'
                />

                {/* price */}
                {/* categories */}
                <SubmitButton text='create rental' className='mt-12'/>
            </FormContainer>
        </div>
        {/* text are - description */}
    </section>
  )
}

