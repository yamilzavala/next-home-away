'use client'
import {useFormStatus} from 'react-dom';
import { Button } from "@/components/ui/button"
import { ReloadIcon } from "@radix-ui/react-icons"

type btnSize = 'default' | 'lg' | 'sm';

export type SubmitButtonProps = {
    className?: string;
    text?: string;
    size?: btnSize
}

const SubmitButton = ({className = '', text = 'submit', size = 'lg'}:SubmitButtonProps) => {
    const {pending} = useFormStatus();

    return (
        <Button
         type='submit'
         disabled={pending}
         className={`capitalize ${className}`}
         size={size}
        >
            {pending ? 
                (
                    <>
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        Please wait...            
                    </>
                ) : (
                    text
                )            
            }
        </Button>
    );
};

export default SubmitButton;