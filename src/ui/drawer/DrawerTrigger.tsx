import { type FC, useContext } from 'react';
import type { DrawerTriggerProps } from '@/ui/drawer/types';

import { DrawerContext } from '@/ui/drawer/Drawer';

import { Button } from '@/ui/button/Button';

export const DrawerTrigger: FC<DrawerTriggerProps> = ({ children, onClick, ...props }) => {
    const { close } = useContext(DrawerContext);

    return (
        <Button onClick={close} {...props}>
            {children}
        </Button>
    );
};
