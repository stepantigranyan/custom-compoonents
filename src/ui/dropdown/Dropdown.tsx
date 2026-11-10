import {
    type ButtonHTMLAttributes,
    type FC,
    type HTMLAttributes,
    type ReactElement,
    isValidElement,
    cloneElement,
} from 'react';

import type { DropDownProps } from '@/ui/dropdown/types';

import { ddMenuPlacement, dropdownDefaultStyles, dropdownMenuPositionDefaultStyles } from '@/ui/dropdown/styles';

import { cn } from '@/utils/cn';

export const Dropdown: FC<DropDownProps> = ({ placement = 'bottom', trigger, className, children }) => {
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
            <div className={cn(dropdownMenuPositionDefaultStyles, placementStyles, className)}>
                <ul className={cn(dropdownDefaultStyles)}>{children}</ul>
            </div>
            {renderedTrigger}
        </div>
    );
};
