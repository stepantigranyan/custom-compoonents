import {
    type ButtonHTMLAttributes,
    cloneElement,
    createContext,
    type FC,
    type HTMLAttributes,
    isValidElement,
    type ReactElement,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';

import type { DrawerBodyProps, DrawerCloseButtonProps, DrawerHeaderProps, DrawerProps } from '@/ui/drawer/types.ts';

import {
    drawerAnimations,
    drawerDefaultStyles,
    drawerHeaderCloseButtonDefaultStyles,
    drawerHeaderDefaultStyles,
    drawerMask,
    drawerPosition,
    drawerResizable,
    maskDefaultStyles,
    maskAnimations,
} from '@/ui/drawer/styles.ts';

import { Mask, Placement, Positions, DRAWER_ROOT } from '@/ui/drawer/consts.ts';

import { Teleport } from '@/ui/shared/Teleport.tsx';

import { useOutsideClick } from '@/hooks/useOutsideClick.ts';

import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

const DrawerContext = createContext<{ close: () => void }>(null);

const DrawerCloseButton: FC<DrawerCloseButtonProps> = ({ className, ...props }) => {
    return (
        <button className={cn(drawerHeaderCloseButtonDefaultStyles, className)} {...props}>
            {<X size={18} />}
        </button>
    );
};

export const Drawer: FC<DrawerProps> = ({
    position = Positions.LEFT,
    maskType = Mask.BLUR,
    target = DRAWER_ROOT,
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

    const placementStyle = target === DRAWER_ROOT ? Placement.FIXED : Placement.ABSOLUTE;
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

export const DrawerHeader: FC<DrawerHeaderProps> = ({
    showCloseButton = true,
    closeButtonPosition = Positions.RIGHT,
    className,
    children,
    ...props
}) => {
    const { close } = useContext(DrawerContext);

    return (
        <div className={cn(drawerHeaderDefaultStyles, className)} {...props}>
            {showCloseButton && closeButtonPosition === Positions.LEFT && <DrawerCloseButton onClick={close} />}
            {children}
            {showCloseButton && closeButtonPosition === Positions.RIGHT && <DrawerCloseButton onClick={close} />}
        </div>
    );
};

export const DrawerBody: FC<DrawerBodyProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(className)} {...props}>
            {children}
        </div>
    );
};
