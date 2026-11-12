import { type FC, useContext } from 'react';
import type { DropDownTriggerProps } from '@/ui/dropdown/types';
import {DropdownContext} from "@/ui/dropdown/Dropdown";

export const DropdownTrigger: FC<DropDownTriggerProps> = ({ children, onClick, ...props }) => {
    const { handleMouseLeave, handleMouseEnter } = useContext(DropdownContext);

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...props}>
            {children}
        </div>
    );
};