import {
    type ButtonHTMLAttributes,
    cloneElement,
    type FC,
    type HTMLAttributes,
    isValidElement,
    type ReactElement,
    useEffect,
    useRef,
    useState,
    useContext,
    createContext,
} from 'react';

import type { ModalProps, ModalHeaderProps, ModalBodyProps, ModalActionsProps } from './types';

import {
    maskDefaultStyles,
    modalDefaultStyles,
    modalHeaderDefaultStyles,
    modalBodyDefaultStyles,
    modalActionsDefaultStyles,
    modalMaskStyles,
    modalAnimations,
    maskAnimations,
} from '@/ui/modal/styles.ts';

import { Mask, MODAL_ROOT, Placement } from '@/ui/modal/consts.ts';

import { Teleport } from '@/ui/shared/Teleport.tsx';

import { cn } from '@/utils/cn';
import { useOutsideClick } from '@/hooks/useOutsideClick.ts';

const ModalContext = createContext<{ close: () => void }>(null);

export const Modal: FC<ModalProps> = ({
    maskType = Mask.BLUR,
    target = MODAL_ROOT,
    trigger,
    maskStyles,
    children,
    className,
    ...props
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    const placementStyle = target === MODAL_ROOT ? Placement.FIXED : Placement.ABSOLUTE;
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
        <ModalContext.Provider value={{ close: toggle }}>
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

            {renderedTrigger}
        </ModalContext.Provider>
    );
};

export const ModalHeader: FC<ModalHeaderProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(modalHeaderDefaultStyles, className)} {...props}>
            {children}
        </div>
    );
};

export const ModalBody: FC<ModalBodyProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(modalBodyDefaultStyles, className)} {...props}>
            {children}
        </div>
    );
};

export const ModalActions: FC<ModalActionsProps> = ({ cancel, close, submit, className, children, ...props }) => {
    const toggle = useContext(ModalContext).close;

    const renderedCancel =
        cancel && isValidElement(cancel)
            ? cloneElement(cancel as ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>, {
                  onClick: (e) => {
                      const originalOnClick = (cancel.props as HTMLAttributes<HTMLButtonElement>).onClick;
                      if (originalOnClick) {
                          originalOnClick(e);
                      }

                      toggle();
                  },
              })
            : null;

    const renderedClose =
        close && isValidElement(close)
            ? cloneElement(close as ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>, {
                  onClick: (e) => {
                      const originalOnClick = (close.props as HTMLAttributes<HTMLButtonElement>).onClick;
                      if (originalOnClick) {
                          originalOnClick(e);
                      }

                      toggle();
                  },
              })
            : null;
    const renderedSubmit =
        submit && isValidElement(submit)
            ? cloneElement(submit as ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>, {
                  onClick: (e) => {
                      const originalOnClick = (submit.props as HTMLAttributes<HTMLButtonElement>).onClick;
                      if (originalOnClick) {
                          originalOnClick(e);
                      }

                      toggle();
                  },
              })
            : null;

    return (
        <div className={cn(modalActionsDefaultStyles, className)} {...props}>
            {children}
            {renderedCancel}
            {renderedClose}
            {renderedSubmit}
        </div>
    );
};
