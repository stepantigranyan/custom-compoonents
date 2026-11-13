import { type FC, type MouseEvent, useState, createContext } from 'react';
import type { DropDownProps } from '@/ui/dropdown/types';
import { dropdownDefaultStyles, dropdownMenuPositionDefaultStyles } from '@/ui/dropdown/styles';

import { Teleport } from '@//ui/shared/Teleport';

import { cn } from '@/utils/cn';

export const DropdownContext = createContext<{
    handleMouseEnter: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleMouseLeave: () => void;
}>(null);

export const Dropdown: FC<DropDownProps> = ({ placement = 'bottom', trigger, className, children }) => {
    const [hover, setHover] = useState<boolean>(false);
    const [placementStyles, setPlacementStyles] = useState(null);

    const handleMouseEnter = (event: MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = event.currentTarget.getBoundingClientRect();

        switch (placement) {
            case 'topLeft':
                setPlacementStyles({
                    paddingBottom: '10px',
                    top: rect.top + window.scrollY + 'px',
                    transform: `translateY(-100%)`,
                    left: rect.left + 'px',
                });
                break;
            case 'top':
                setPlacementStyles({
                    paddingBottom: '10px',
                    top: rect.top + window.scrollY + 'px',
                    transform: `translate(-50%, -100%)`,
                    left: rect.left + rect.width / 2 + 'px',
                });
                break;
            case 'topRight':
                setPlacementStyles({
                    paddingBottom: '10px',
                    top: rect.top + window.scrollY + 'px',
                    transform: `translate(calc(-100% + ${rect.width}px), -100%)`,
                    left: rect.left + 'px',
                });
                break;
            case 'leftTop':
                setPlacementStyles({
                    paddingRight: '10px',
                    top: rect.top + window.scrollY + 'px',
                    transform: `translateX(-100%)`,
                    left: rect.left + 'px',
                });
                break;
            case 'left':
                setPlacementStyles({
                    paddingRight: '10px',
                    top: rect.top + window.scrollY + 'px',
                    transform: `translate(-100%, calc(-50% + ${rect.height / 2}px))`,
                    left: rect.left + 'px',
                });
                break;
            case 'leftBottom':
                setPlacementStyles({
                    paddingRight: '10px',
                    top: rect.top + window.scrollY + 'px',
                    transform: `translate(-100%, calc(-100% + ${rect.height}px))`,
                    left: rect.left + 'px',
                });
                break;
            case 'rightTop':
                setPlacementStyles({
                    paddingLeft: '10px',
                    top: rect.top + window.scrollY + 'px',
                    transform: `translateX(${rect.width}px)`,
                    left: rect.left + 'px',
                });
                break;
            case 'right':
                setPlacementStyles({
                    paddingLeft: '10px',
                    top: rect.top + window.scrollY + 'px',
                    transform: `translate(${rect.width}px, calc(-50% + ${rect.height / 2}px))`,
                    left: rect.left + 'px',
                });
                break;
            case 'rightBottom':
                setPlacementStyles({
                    paddingLeft: '10px',
                    top: rect.top + window.scrollY + 'px',
                    transform: `translate(${rect.width}px, calc(-100% + ${rect.height}px))`,
                    left: rect.left + 'px',
                });
                break;
            case 'bottomLeft':
                setPlacementStyles({
                    paddingTop: '10px',
                    top: rect.top + rect.height + window.scrollY + 'px',
                    left: rect.left + 'px',
                });
                break;
            case 'bottom':
                setPlacementStyles({
                    paddingTop: '10px',
                    top: rect.top + rect.height + window.scrollY + 'px',
                    transform: 'translateX(-50%)',
                    left: rect.left + rect.width / 2 + 'px',
                });
                break;
            case 'bottomRight':
                setPlacementStyles({
                    paddingTop: '10px',
                    top: rect.top + rect.height + window.scrollY + 'px',
                    transform: `translateX(calc(-100% + ${rect.width}px)`,
                    left: rect.left + 'px',
                });
                break;
        }

        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <DropdownContext.Provider value={{ handleMouseEnter, handleMouseLeave }}>
            {trigger}
            {hover && (
                <Teleport target="dropdown-root">
                    <div
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        style={placementStyles}
                        className={cn(dropdownMenuPositionDefaultStyles, className)}
                    >
                        <ul className={cn(dropdownDefaultStyles)}>{children}</ul>
                    </div>
                </Teleport>
            )}
        </DropdownContext.Provider>
    );
};
