import { type FC, useContext, useEffect, useState } from 'react';
import type { InputProps } from '@/ui/form/types';
import { inputDefaultStyles } from '@/ui/form/styles';

import { cn } from '@/utils/cn';
import { FormContext } from '@/ui/form/Form';
import { FormItemContext } from '@/ui/form/FormItem';

export const Input: FC<InputProps> = ({ className, ...rest }) => {
    const dataRef = useContext(FormContext);
    const { props } = useContext(FormItemContext);
    const [value, setValue] = useState<string | number | readonly string[] | undefined>(props.defaultValue);

    useEffect(() => {
        dataRef.current[props.name] = value;
    }, [value]);

    return (
        <input
            className={cn(inputDefaultStyles, className)}
            onChange={(e) => setValue(e.target.value)}
            {...props}
            {...rest}
        />
    );
};
