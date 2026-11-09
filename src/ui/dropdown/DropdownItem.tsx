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
}) => {
    const modelStyles = ddItemModel[model];

    return (
        <li className={cn(dropdownItemDefaultStyles, modelStyles, className)}>
            {iconPlacement === 'left' && icon}
            {children}
            {iconPlacement === 'right' && icon}
        </li>
    );
};
