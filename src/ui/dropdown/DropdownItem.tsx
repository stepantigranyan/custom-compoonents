import type { FC } from 'react';
import type { DropdownItemProps } from '@/ui/dropdown/types';
import { ddItemModel, dropdownItemDefaultStyles } from '@/ui/dropdown/styles';
import { cn } from '@/utils/cn';

export const DropdownItem: FC<DropdownItemProps> = ({
    icon,
    iconPlacement = 'left',
    model = 'default',
    className,
    children,
    ...props
}) => {
    const modelStyles = ddItemModel[model];

    return (
        <li className={cn(dropdownItemDefaultStyles, modelStyles, className)} {...props}>
            {icon && iconPlacement === 'left' && icon}
            {children}
            {icon && iconPlacement === 'right' && icon}
        </li>
    );
};
