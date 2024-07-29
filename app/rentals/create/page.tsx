import React from 'react';
import {FormContainer, SubmitButton, FormInput} from '../../../components/form';
import { createPropertyAction } from '../../../utils/actions';

function CreateProperty() {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>
        create property
      </h1>
      <div className='border p-8 rounded-md'>
        <h3 className='text-lg mb-4 font-medium'>General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className='grid md:grid-cols-2 gap-8 mb-4'>
            <FormInput
              name='name'
              type='text'
              label='Name (20 limit)'
              defaultValue='Cabin in Latvia'
            />
            <FormInput
              name='tagline'
              type='text '
              label='Tagline (30 limit)'
              defaultValue='Dream Getaway Awaits You Here!'
            />
            {/* price */}
            {/* categories */}
          </div>
          {/* text area / description */}
          <SubmitButton text='create rental' className='mt-12' />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProperty;