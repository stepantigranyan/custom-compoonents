import { type FC, useContext } from 'react';
import type { CollapseItemBodyProps } from '@/ui/collapse/types.ts';
import { collapseItemBodyDefaultStyles, collapseSize } from '@/ui/collapse/styles.ts';
import { CollapseContext } from '@/ui/collapse/Collapse';
import { CollapseItemContext } from '@/ui/collapse/CollapseItem';

import { cn } from '@/utils/cn';

export const CollapseItemBody: FC<CollapseItemBodyProps> = ({ className, children, ...props }) => {
    const { size } = useContext(CollapseContext);
    const { isChecked } = useContext(CollapseItemContext);

    const sizeStyle = collapseSize[size];
    const showStyle = isChecked ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]';

    return (
        <div className={cn(collapseItemBodyDefaultStyles, showStyle, className)} {...props}>
            <div className="overflow-hidden">
                <div className={cn(sizeStyle, 'break-words')}>{children}</div>
            </div>
        </div>
    );
};
