import type { FC } from 'react';

import type { FormProps, FormItemProps } from '@/ui/form/types';

import { formDefaultStyles } from '@/ui/form/styles';

import { cn } from '@/utils/cn';

export const Form: FC<FormProps> = ({ className, children, ...props }) => {
    return (
        <form className={cn(formDefaultStyles, className)} {...props}>
            {children}
        </form>
    );
};

export const FormItem: FC<FormItemProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(className)} {...props}>
            {children}
        </div>
    );
};
