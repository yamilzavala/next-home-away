import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type FormInputProps = {
    type:string;
    name:string;
    id?:string;
    label?:string;
    defaultValue?: string;
}

const FormInput = (props:FormInputProps) => {
    const { type, name, id, label, defaultValue } = props;
    return (
        <div className="mb-2">
            <Label htmlFor={name}>{label || name}</Label>
            <Input id={id || name} name={name} type={type} defaultValue={defaultValue} required/>
        </div>
    );
};

export default FormInput;