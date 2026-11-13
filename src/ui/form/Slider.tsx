import {type FC, useContext, useEffect, useState} from 'react';
import type { InputProps } from '@/ui/form/types';
import { sliderDefaultStyles, sliderDisabledStyles } from '@/ui/form/styles';

import { cn } from '@/utils/cn';

import {FormContext} from "@/ui/form/Form";
import {FormItemContext} from "@/ui/form/FormItem";

export const Slider: FC<InputProps> = ({className, ...rest}) => {
    const dataRef = useContext(FormContext);
    const { props } = useContext(FormItemContext);
    const [value, setValue] = useState<number>(Number(props.defaultValue ?? 50));

    useEffect(() => {
        dataRef.current[props.name] = value;
    }, [value]);

    const percent = ((value - Number(props.min ?? 0)) / (Number(props.max ?? 100) - Number(props.min ?? 0))) * 100;

    return (
        <>
            <input
                type="range"
                name={props.name}
                onChange={(e) => setValue(Number(e.target.value))}
                style={{ '--range-progress': `${percent}%` }}
                className={cn(sliderDefaultStyles, props.disabled && sliderDisabledStyles, className)}
                {...props}
                {...rest}
            />
            <span className="text-center">{value}</span>
        </>
    );
};
