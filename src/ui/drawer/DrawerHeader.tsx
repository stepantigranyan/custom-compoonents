import { type FC, useContext } from 'react';
import type { DrawerCloseButtonProps, DrawerHeaderProps } from '@/ui/drawer/types';
import { drawerHeaderCloseButtonDefaultStyles, drawerHeaderDefaultStyles } from '@/ui/drawer/styles';

import { DrawerContext } from '@/ui/drawer/Drawer';

import { X } from 'lucide-react';

import { cn } from '@/utils/cn';

const DrawerCloseButton: FC<DrawerCloseButtonProps> = ({ className, ...props }) => {
    return (
        <button className={cn(drawerHeaderCloseButtonDefaultStyles, className)} {...props}>
            {<X size={18} />}
        </button>
    );
};

export const DrawerHeader: FC<DrawerHeaderProps> = ({
    showCloseButton = true,
    closeButtonPosition = 'right',
    className,
    children,
    ...props
}) => {
    const { close } = useContext(DrawerContext);

    return (
        <div className={cn(drawerHeaderDefaultStyles, className)} {...props}>
            {showCloseButton && closeButtonPosition === 'left' && <DrawerCloseButton onClick={close} />}
            {children}
            {showCloseButton && closeButtonPosition === 'right' && <DrawerCloseButton onClick={close} />}
        </div>
    );
};
