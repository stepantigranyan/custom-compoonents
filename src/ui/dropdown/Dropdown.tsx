import {type FC, useState, createContext} from 'react';
import type { DropDownProps } from '@/ui/dropdown/types';
import { ddMenuPlacement, dropdownDefaultStyles, dropdownMenuPositionDefaultStyles } from '@/ui/dropdown/styles';

import { Teleport } from '@//ui/shared/Teleport'

import { cn } from '@/utils/cn';

export const DropdownContext = createContext<{handleMouseEnter: () => void, handleMouseLeave: () => void}>(null)

export const Dropdown: FC<DropDownProps> = ({ placement = 'bottom', trigger, className, children }) => {
    const [hover, setHover] = useState<boolean>(false);
    const placementStyles = ddMenuPlacement[placement];

    const handleMouseEnter = () => {
        setHover(true);
    }

    const handleMouseLeave = () => {
        setHover(false);
    }

    return (
        <DropdownContext.Provider value={{ handleMouseEnter, handleMouseLeave }}>
            { trigger }
            {
                hover && (
                    <Teleport target='dropdown-root'>
                        <div className={cn(dropdownMenuPositionDefaultStyles, className)}>
                            <ul className={cn(dropdownDefaultStyles)}>{children}</ul>
                        </div>
                    </Teleport>
                )
            }
        </DropdownContext.Provider>

    );
};
