import type { FC } from 'react';
import type { ModalBodyProps } from '@/ui/modal/types.ts';
import { modalBodyDefaultStyles } from '@/ui/modal/styles.ts';

import { cn } from '@/utils/cn';

export const ModalBody: FC<ModalBodyProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(modalBodyDefaultStyles, className)} {...props}>
            {children}
        </div>
    );
};
