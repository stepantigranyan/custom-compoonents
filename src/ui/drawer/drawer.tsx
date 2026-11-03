import {cloneElement, type FC, type HTMLAttributes, type JSX, useRef, useState} from "react";
import {createPortal} from "react-dom";
import { cn } from '@/utils/cn';

type drawer_position = 'top' | 'left' | 'right' | 'bottom';
type drawer_size = 'sm' | 'md' | 'lg';
type drawer_mask = 'blur' | 'dimmed' | 'none';
type drawer_placement = 'relative' | 'absolute';

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
    position?: drawer_position;
    size?: drawer_size;
    mask?: drawer_mask;
    placement?: drawer_placement;
    trigger?: JSX.Element;
}

const drawerPosition: Record<drawer_position, Record<drawer_size, string>> = {
    top: {
        sm: 'top-0 left-0 right-0 w-full h-100',
        md: 'top-0 left-0 right-0 w-full h-150',
        lg: 'top-0 left-0 right-0 w-full h-200',
    },
    left: {
        sm: 'left-0 top-0 bottom-0 w-100 h-screen',
        md: 'left-0 top-0 bottom-0 w-150 h-screen',
        lg: 'left-0 top-0 bottom-0 w-200 h-screen',
    },
    right: {
        sm: 'right-0 top-0 bottom-0 w-100 h-screen',
        md: 'right-0 top-0 bottom-0 w-150 h-screen',
        lg: 'right-0 top-0 bottom-0 w-200 h-screen',
    },
    bottom: {
        sm: 'bottom-0 left-0 right-0 w-full h-100',
        md: 'bottom-0 left-0 right-0 w-full h-150',
        lg: 'bottom-0 left-0 right-0 w-full h-200',
    },
};

const drawerMask: Record<drawer_mask, string> = {
    blur: 'bg-red backdrop-blur-xs',
    dimmed: 'bg-inherit',
    none: 'bg-transparent',
};

const maskDefaultStyles = 'fixed w-full h-screen backdrop-blur-xs z-200 ';
const drawerDefaultStyles = 'absolute bg-white flex flex-col shadow-md z-210 transition-all duration-200 linear';

interface TeleportProps {
    children: JSX.Element;
    target: string;
}

const Teleport: FC<TeleportProps> = ({ children, target = 'root-portal' }) => {
    const sidebarContentEl = document.getElementById(target)!;

    return createPortal(
        children,
        sidebarContentEl
    );
};

const Drawer: FC<DrawerProps> = ({ position = 'left', size = 'md', mask = 'blur', placement = 'absolute', trigger, className, children, ...props}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);

    const positionStyle = drawerPosition[position][size];
    const maskStyle = drawerMask[position];

    if (visible) {
        wrapperRef.current.className + ' animate-[openLeftDrawer_0.2s_linear]'
    } else {

    }

    const renderTrigger = cloneElement(trigger, {
        onClick: () => {
            setVisible((prev) => !prev);
        }
    });

    if (placement === 'absolute') {
        return (
            <>
                <Teleport target={'drawer-root'}>
                    <div className={cn(maskDefaultStyles, maskStyle)}>
                        <div className={cn(drawerDefaultStyles, positionStyle)} ref={wrapperRef} {...props}>
                            {children}
                        </div>
                    </div>
                </Teleport>

                {
                    renderTrigger
                }
            </>
        );
    }
};

const DrawerHeader = () => {
    return (
        <></>
    );
};

export { Drawer };