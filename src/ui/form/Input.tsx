import type { FC } from 'react';
import type { InputProps } from '@/ui/form/types';
import { inputDefaultStyles, labelDefaultStyles, requiredDefaultStyles } from '@/ui/form/styles';

import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/utils/cn';

export const Input: FC<InputProps> = ({ id, label, className, required, ...props }) => {
    const generateId = id || uuidv4();

    return (
        <div className={cn(labelDefaultStyles)}>
            {label && (
                <label htmlFor={generateId}>
                    {required && <sup className={requiredDefaultStyles}>*</sup>}
                    {label + ' :'}
                </label>
            )}
            <input id={generateId} className={cn(inputDefaultStyles, className)} required={required} {...props} />
        </div>
    );
};
