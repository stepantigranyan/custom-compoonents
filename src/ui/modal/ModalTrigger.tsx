import { type FC, useContext } from 'react';
import type { ModalTriggerProps } from '@/ui/modal/types';
import { ModalContext } from '@/ui/modal/Modal';

import { Button } from '@/ui/button/Button';

export const ModalTrigger: FC<ModalTriggerProps> = ({ children, onClick, ...props }) => {
    const { close } = useContext(ModalContext);

    return (
        <Button onClick={close} {...props}>
            {children}
        </Button>
    );
};
