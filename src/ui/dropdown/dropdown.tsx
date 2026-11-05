import {
    type ButtonHTMLAttributes,
    cloneElement,
    type FC,
    type HTMLAttributes,
    isValidElement,
    type ReactElement,
} from 'react';
import type { DropDownProps, DropdownItemProps, DropDownSeparatorProps } from '@/ui/dropdown/types.ts';

import {
    ddMenuPlacement,
    ddItemModel,
    dropdownDefaultStyles,
    dropdownItemDefaultStyles,
} from '@/ui/dropdown/styles.ts';
import { cn } from '@/utils/cn';

export const DropDown: FC<DropDownProps> = ({ placement = 'bottom', trigger, className, children }) => {
    const placementStyles = ddMenuPlacement[placement];

    const renderedTrigger =
        trigger && isValidElement(trigger)
            ? cloneElement(trigger as ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>, {
                  onClick: (e) => {
                      const originalOnClick = (trigger.props as HTMLAttributes<HTMLButtonElement>).onClick;
                      if (originalOnClick) {
                          originalOnClick(e);
                      }
                  },
              })
            : null;
    return (
        <div className="group relative inline-flex items-center justify-center gap-x-2">
            <div className={cn(placementStyles, className)}>
                <ul className={cn(dropdownDefaultStyles)}>{children}</ul>
            </div>
            {renderedTrigger}
        </div>
    );
};

export const DropDownItem: FC<DropdownItemProps> = ({
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

export const DropDownSeparator: FC<DropDownSeparatorProps> = ({ className }) => {
    return <div className={cn('w-full h-px bg-gray-300', className)}></div>;
};
