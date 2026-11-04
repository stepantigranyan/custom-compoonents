import type { FC } from 'react';
import type { BtnProps } from '@/ui/button/types.ts';
import { btnRounded, btnSize, btnVariant, buttonDefaultStyles } from '@/ui/button/styles.ts';

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
            {iconPlacement === 'left' && icon}
            {children}
            {iconPlacement === 'right' && icon}
        </button>
    );
};
