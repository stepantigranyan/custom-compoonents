import { type FC, useRef, createContext, type RefObject } from 'react';

import type { FormProps } from '@/ui/form/types';

import { formDefaultStyles } from '@/ui/form/styles';

import { cn } from '@/utils/cn';

export const FormContext = createContext<RefObject<{}>>(null);
export const Form: FC<FormProps> = ({ className, children, ...props }) => {
    const dataRef = useRef({});

    return (
        <FormContext.Provider value={dataRef}>
            <form className={cn(formDefaultStyles, className)} {...props}>
                {children}
            </form>
        </FormContext.Provider>
    );
};
