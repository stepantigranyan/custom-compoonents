import { type FC, useState } from 'react';
import type { InputProps } from '@/ui/form/types';
import { labelDefaultStyles, sliderDefaultStyles, sliderDisabledStyles, requiredDefaultStyles } from '@/ui/form/styles';

import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/utils/cn';

export const Slider: FC<InputProps> = ({
    id,
    min = 0,
    max = 100,
    step = 1,
    defaultValue = 0,
    label,
    className,
    disabled,
    onChange,
    onInput,
    required,
    ...props
}) => {
    const [v, setV] = useState<number>(Number(defaultValue));

    const generateId = id || uuidv4();

    const percent = ((v - Number(min)) / (Number(max) - Number(min))) * 100;

    return (
        <div className={cn(labelDefaultStyles)}>
            {label && (
                <label htmlFor={generateId}>
                    {required && <sup className={requiredDefaultStyles}>*</sup>}
                    {label + ' :'}
                </label>
            )}
            <input
                type="range"
                onChange={(e) => setV(Number(e.target.value))}
                style={{ '--range-progress': `${percent}%` }}
                className={cn(sliderDefaultStyles, disabled && sliderDisabledStyles, className)}
                id={generateId}
                min={min}
                max={max}
                value={v}
                step={step}
                disabled={disabled}
                {...props}
            />
            <span className="text-center">{v}</span>
        </div>
    );
};
