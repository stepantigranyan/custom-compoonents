import { type FC, createContext } from 'react';
import type { FormItemProps } from '@/ui/form/types';
import { labelDefaultStyles, requiredDefaultStyles } from '@/ui/form/styles';

import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/utils/cn';

export const FormItemContext = createContext(null);
export const FormItem: FC<FormItemProps> = ({ id, label, className, children, ...props }) => {
    const generatedId = id ?? uuidv4();

    return (
        <FormItemContext.Provider value={{ props: { id: generatedId, ...props } }}>
            <div className={cn(className, label !== undefined && labelDefaultStyles)} {...props}>
                <div>
                    {props.required && <sup className={requiredDefaultStyles}>*</sup>}
                    {label !== undefined && (
                        <label htmlFor={generatedId} className="cursor-pointer">
                            {label}:
                        </label>
                    )}
                </div>

                {children}
            </div>
        </FormItemContext.Provider>
    );
};
