import type { FC } from 'react';
import type { ModalHeaderProps } from '@/ui/modal/types';
import { modalHeaderDefaultStyles } from '@/ui/modal/styles.ts';

import { cn } from '@/utils/cn';

export const ModalHeader: FC<ModalHeaderProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(modalHeaderDefaultStyles, className)} {...props}>
            {children}
        </div>
    );
};
