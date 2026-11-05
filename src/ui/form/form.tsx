import type {FC} from "react";
import type {InputProps} from "@/ui/form/types.ts";

import { labelDefaultStyles, inputDefaultStyles, checkBoxDefaultStyles } from "@/ui/form/styles.ts";

import { v4 as uuidv4 } from 'uuid';
import { cn } from "@/utils/cn";

const Input: FC<InputProps> = ({ label, className, required,  ...props }) => {
    const id = uuidv4();

    return (
        <label htmlFor={id} className={cn(labelDefaultStyles)}>
            <span>
                {required && (<sup className='text-red-500 mr-1'>*</sup>)}
                {label} :
            </span>
            <input id={id} className={cn(inputDefaultStyles, className)} required={required} {...props} />
        </label>
    )
};

const CheckBox: FC<InputProps> = ({ label, className, onChange, onInput, ...props}) => {
    return (
        <label className={cn(checkBoxDefaultStyles, className)}>
            <input type='checkbox' onChange={onChange}/>
        </label>
    )
}

export { Input, CheckBox };