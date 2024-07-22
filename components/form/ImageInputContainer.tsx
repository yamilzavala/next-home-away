'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';
import SubmitButton from './Buttons';
import { type actionFunction } from '@/utils/types';
import { LuUser2 } from 'react-icons/lu';

type ImageInputContainerProps = {
    image: string,
    name: string,
    action: actionFunction,
    text: string,
    children?: React.ReactNode
}

const ImageInputContainer = (props: ImageInputContainerProps) => {
    const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
    const {image, name, action, text} = props;
    return (
        <div>
            {image ? 
                <Image className='rounded-md object-cover mb-4 w-24 h-24'
                width={100}
                height={100}
                alt={name}
                src={image}
                /> :
                <LuUser2 className='w-24 h-24 bg-primary rounded-md text-white mb-4'/>
            }

            <Button onClick={() => setUpdateFormVisible((prev) => !prev)}
                variant='outline' 
                size='sm'>
                {text}
            </Button>

            {isUpdateFormVisible && (
                <div className='max-w-lg mt-4'>
                    <FormContainer action={action}>
                        {props.children}
                        <ImageInput/>
                        <SubmitButton size='sm'/>
                    </FormContainer>
                </div>
            )}
            
        </div>
    );
};

export default ImageInputContainer;