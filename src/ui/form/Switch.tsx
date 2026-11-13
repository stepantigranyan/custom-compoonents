import { type FC, useContext, useEffect, useState } from 'react';
import type { InputProps } from '@/ui/form/types';
import { switchDefaultStyles } from '@/ui/form/styles';

import { cn } from '@/utils/cn';
import { FormContext } from '@/ui/form/Form';
import { FormItemContext } from '@/ui/form/FormItem';

export const Switch: FC<InputProps> = ({ className, onChange, onInput, required, defaultValue, ...rest }) => {
    const dataRef = useContext(FormContext);
    const { props } = useContext(FormItemContext);
    const [value, setValue] = useState(Boolean(defaultValue));

    useEffect(() => {
        dataRef.current[props.name] = value;
    }, [value]);

    return (
        <input
            type="checkbox"
            onChange={(e) => setValue(e.target.checked)}
            className={cn(switchDefaultStyles, className)}
            {...props}
            {...rest}
        />
    );
};
