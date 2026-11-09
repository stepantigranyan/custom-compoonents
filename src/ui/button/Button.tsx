import type { FC } from 'react';
import type { BtnProps } from '@/ui/button/types';
import { btnRounded, btnSize, btnVariant, buttonDefaultStyles } from '@/ui/button/styles';

import { cn } from '@/utils/cn';

export const Button: FC<BtnProps> = ({
    variant = 'solid',
    color = 'blue',
    size = 'md',
    rounded = 'md',
    iconPlacement = 'left',
    icon,
    className,
    children,
    ...props
}) => {
    const buttonVariant = btnVariant[variant][color];
    const buttonRounded = btnRounded[rounded];
    const buttonSize = btnSize[size];

    return (
        <button className={cn(buttonDefaultStyles, buttonVariant, buttonRounded, buttonSize, className)} {...props}>
            {icon && iconPlacement === 'left' && icon}
            {children}
            {icon && iconPlacement === 'right' && icon}
        </button>
    );
};
