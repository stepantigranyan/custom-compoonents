import {
    type ButtonHTMLAttributes,
    cloneElement,
    type FC,
    type HTMLAttributes,
    isValidElement,
    type JSX,
    type ReactElement,
    useEffect,
    useRef,
    useState,
} from 'react';
import { createPortal } from 'react-dom';
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
    trigger?: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
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

const drawerAnimations: Record<drawer_position, { open: string; close: string }> = {
    left: {
        open: 'animate-[openLeftDrawer_0.5s_ease-in-out_forwards]',
        close: 'animate-[closeLeftDrawer_0.5s_ease-in-out_forwards]',
    },
    right: {
        open: 'animate-[openRightDrawer_0.3s_ease-in-out_forwards]',
        close: 'animate-[closeRightDrawer_0.3s_ease-in-out_forwards]',
    },
    top: {
        open: 'animate-[openTopDrawer_0.3s_ease-in-out_forwards]',
        close: 'animate-[closeTopDrawer_0.3s_ease-in-out_forwards]',
    },
    bottom: {
        open: 'animate-[openBottomDrawer_0.3s_ease-in-out_forwards]',
        close: 'animate-[closeBottomDrawer_0.3s_ease-in-out_forwards]',
    },
};

const maskDefaultStyles = 'fixed w-full h-screen backdrop-blur-xs z-200 ';
const drawerDefaultStyles = 'absolute p-2 bg-white flex flex-col shadow-md z-210 transition-all linear';

interface TeleportProps {
    children: JSX.Element;
    target: string;
}

const Teleport: FC<TeleportProps> = ({ children, target = 'drawer-root' }) => {
    const sidebarContentEl = document.getElementById(target)!;

    return createPortal(children, sidebarContentEl);
};

const Drawer: FC<DrawerProps> = ({
    position = 'left',
    size = 'md',
    mask = 'blur',
    placement = 'absolute',
    trigger,
    className,
    children,
    ...props
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [open, setOpen] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        if (open) {
            setVisible(true);
        }
    }, [open]);

    const positionStyle = drawerPosition[position][size];
    const maskStyle = drawerMask[position];

    const openAnimation = drawerAnimations[position].open;
    const closeAnimation = drawerAnimations[position].close;

    const toggle = () => {
        setOpen((prev) => !prev);
    };

    const handleAnimationEnd = () => {
        if (!open) {
            setVisible(false);
        }
    };

    const renderedTrigger =
        trigger && isValidElement(trigger)
            ? cloneElement(trigger as ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>, {
                  onClick: (e) => {
                      const originalOnClick = (trigger.props as HTMLAttributes<HTMLButtonElement>).onClick;
                      if (originalOnClick) {
                          originalOnClick(e);
                      }

                      toggle();
                  },
              })
            : null;

    if (placement === 'absolute') {
        return (
            <>
                {visible && (
                    <Teleport target="drawer-root">
                        <div className={cn(maskDefaultStyles, maskStyle)}>
                            <div
                                key={open ? 'open' : 'close'}
                                className={cn(
                                    drawerDefaultStyles,
                                    positionStyle,
                                    open ? openAnimation : closeAnimation
                                )}
                                ref={wrapperRef}
                                onAnimationEnd={handleAnimationEnd}
                                {...props}
                            >
                                {children}
                            </div>
                        </div>
                    </Teleport>
                )}

                {
                    renderedTrigger
                }
            </>
        );
    } else {
        return (
            <>
                {visible && (
                    <div className={cn(maskDefaultStyles, maskStyle)}>
                        <div
                            key={open ? 'open' : 'close'}
                            className={cn(
                                drawerDefaultStyles,
                                positionStyle,
                                open ? openAnimation : closeAnimation
                            )}
                            ref={wrapperRef}
                            onAnimationEnd={handleAnimationEnd}
                            {...props}
                        >
                            {children}
                        </div>
                    </div>
                )}

                {renderedTrigger}
            </>
        );
    }
};

const DrawerHeader = () => {
    return (
        <div></div>
    );
};

export { Drawer };
