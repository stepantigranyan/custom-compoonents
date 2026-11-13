import {type FC, useContext, useEffect, useState} from 'react';
import type { InputProps } from '@/ui/form/types';
import { checkBoxDefaultStyles } from '@/ui/form/styles';

import { cn } from '@/utils/cn';
import {FormContext} from "@/ui/form/Form";
import {FormItemContext} from "@/ui/form/FormItem";

export const CheckBox: FC<InputProps> = ({className, onChange, onInput, ...rest }) => {
    const dataRef = useContext(FormContext);
    const { props } = useContext(FormItemContext);
    const [value, setValue] = useState<boolean>(Boolean(props.defaultChecked));

    useEffect(() => {
        dataRef.current[props.name] = value;
    }, [value]);


    return (
            <input
                type="checkbox"
                onChange={(e) => setValue((Boolean(e.target.checked)))}
                className={cn(checkBoxDefaultStyles, className)}
                {...props}
                {...rest}
            />
    );
};
