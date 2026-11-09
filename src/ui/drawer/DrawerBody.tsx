import type { FC } from 'react';
import type { DrawerBodyProps } from '@/ui/drawer/types.ts';
import { cn } from '@/utils/cn';

export const DrawerBody: FC<DrawerBodyProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(className)} {...props}>
            {children}
        </div>
    );
};
