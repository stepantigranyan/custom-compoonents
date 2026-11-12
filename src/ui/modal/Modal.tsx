import { type FC, useEffect, useRef, useState, createContext } from 'react';

import type { ModalProps } from '@/ui/modal/types';

import {
    maskDefaultStyles,
    modalDefaultStyles,
    modalMaskStyles,
    modalAnimations,
    maskAnimations,
} from '@/ui/modal/styles';

import { Teleport } from '@/ui/shared/Teleport';

import { cn } from '@/utils/cn';

import { useOutsideClick } from '@/hooks/useOutsideClick';

export const ModalContext = createContext<{ close: () => void }>(null);

export const Modal: FC<ModalProps> = ({
    maskType = 'blur',
    target = 'modal-root',
    trigger,
    maskStyles,
    children,
    className,
    ...props
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    const placementStyle = target === 'modal-root' ? 'fixed' : 'absolute';
    const maskStyle = modalMaskStyles[maskType];

    const openModalAnimation = modalAnimations.open;
    const closeModalAnimation = modalAnimations.close;

    const openMaskAnimation = maskAnimations.open;
    const closeMaskAnimation = maskAnimations.close;

    useEffect(() => {
        if (open) {
            setVisible(true);
        }
    }, [open]);

    const toggle = () => {
        setOpen((prev) => !prev);
    };

    const handleAnimationEnd = () => {
        if (!open) {
            setVisible(false);
        }
    };

    useOutsideClick(wrapperRef, toggle);

    return (
        <ModalContext.Provider value={{ close: toggle }}>
            {trigger}
            {visible && (
                <Teleport target={target}>
                    <div
                        className={cn(
                            placementStyle,
                            maskDefaultStyles,
                            open ? openMaskAnimation : closeMaskAnimation,
                            maskStyle,
                            maskStyles
                        )}
                    >
                        <div
                            className={cn(modalDefaultStyles, open ? openModalAnimation : closeModalAnimation)}

                            ref={wrapperRef}
                            onAnimationEnd={handleAnimationEnd}
                            {...props}
                        >
                            {children}
                        </div>
                    </div>
                </Teleport>
            )}
        </ModalContext.Provider>
    );
};
