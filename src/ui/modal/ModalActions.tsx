import {
    type FC,
    type ButtonHTMLAttributes,
    type HTMLAttributes,
    type ReactElement,
    isValidElement,
    cloneElement,
    useContext,
} from 'react';
import type { ModalActionsProps } from '@/ui/modal/types.ts';
import { modalActionsDefaultStyles } from '@/ui/modal/styles.ts';

import { ModalContext } from '@/ui/modal/Modal.tsx';

import { cn } from '@/utils/cn';

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
