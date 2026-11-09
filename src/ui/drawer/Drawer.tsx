import {
    type FC,
    type ButtonHTMLAttributes,
    type HTMLAttributes,
    type ReactElement,
    useEffect,
    useRef,
    useState,
    isValidElement,
    createContext,
    cloneElement,
} from 'react';

import type { DrawerProps } from '@/ui/drawer/types';

import {
    drawerAnimations,
    drawerDefaultStyles,
    drawerMask,
    drawerPosition,
    drawerResizable,
    maskDefaultStyles,
    maskAnimations,
} from '@/ui/drawer/styles';

import { Teleport } from '@/ui/shared/Teleport';

import { useOutsideClick } from '@/hooks/useOutsideClick';

import { cn } from '@/utils/cn';

export const DrawerContext = createContext<{ close: () => void }>(null);

export const Drawer: FC<DrawerProps> = ({
    position = 'left',
    maskType = 'blur',
    target = 'drawer-root',
    resize = false,
    showCloseButton = true,
    maskStyles,
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

    const placementStyle = target === 'drawer-root' ? 'fixed' : 'absolute';
    const positionStyle = drawerPosition[position];
    const maskStyle = drawerMask[maskType];
    const resizeStyle = resize ? drawerResizable[position] : '';

    const openDrawerAnimation = drawerAnimations[position].open;
    const closeDrawerAnimation = drawerAnimations[position].close;

    const openMaskAnimation = maskAnimations.open;
    const closeMaskAnimation = maskAnimations.close;

    const toggle = () => {
        setOpen((prev) => !prev);
    };

    const handleAnimationEnd = () => {
        if (!open) {
            setVisible(false);
        }
    };

    useOutsideClick(wrapperRef, toggle);

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

    return (
        <DrawerContext.Provider value={{ close: toggle }}>
            {visible && (
                <Teleport target={target}>
                    <div
                        className={cn(
                            placementStyle,
                            maskDefaultStyles,
                            maskStyle,
                            open ? openMaskAnimation : closeMaskAnimation,
                            maskStyles
                        )}
                    >
                        <div
                            className={cn(
                                drawerDefaultStyles,
                                positionStyle,
                                resizeStyle,
                                open ? openDrawerAnimation : closeDrawerAnimation
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

            {renderedTrigger}
        </DrawerContext.Provider>
    );
};
