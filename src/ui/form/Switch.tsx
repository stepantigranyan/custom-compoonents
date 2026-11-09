import type { FC } from 'react';
import type { InputProps } from '@/ui/form/types';
import { labelDefaultStyles, requiredDefaultStyles, switchDefaultStyles } from '@/ui/form/styles';

import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/utils/cn';

export const Switch: FC<InputProps> = ({ id, label, className, onChange, onInput, required, ...props }) => {
    const generateId = id || uuidv4();

    return (
        <div className={cn(labelDefaultStyles)}>
            {label && (
                <label htmlFor={generateId}>
                    {required && <sup className={requiredDefaultStyles}>*</sup>}
                    {label + ' :'}
                </label>
            )}
            <input {...props} type="checkbox" id={generateId} className={cn(switchDefaultStyles, className)} />
        </div>
    );
};
