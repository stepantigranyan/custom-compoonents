import {type FC, useContext, useEffect, useState} from 'react';
import type { InputProps } from '@/ui/form/types';
import { radioDefaultStyles } from '@/ui/form/styles';

import { cn } from '@/utils/cn';
import {FormContext} from "@/ui/form/Form";
import {FormItemContext} from "@/ui/form/FormItem";

export const Radio: FC<InputProps> = ({className, onChange, onInput, defaultValue, required, ...rest}) => {
    const dataRef = useContext(FormContext);
    const { props } = useContext(FormItemContext);
    const [value, setValue] = useState<string | number | readonly string[] | undefined>(defaultValue);

    useEffect(() => {
        dataRef.current[props.name] = value;
    }, [value]);

    return (
            <input
                type="radio"
                onChange={(e) => setValue(e.target.value)}
                className={cn(radioDefaultStyles, className)}
                {...props}
                {...rest}
            />
    );
};
