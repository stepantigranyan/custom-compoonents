import { type FC, useContext } from 'react';
import type { CollapseItemHeaderProps } from '@/ui/collapse/types';

import {
    collapseItemHeaderDefaultStyles,
    collapseItemHeaderLabelDefaultStyles,
    collapseSize,
} from '@/ui/collapse/styles';

import { CollapseContext } from '@/ui/collapse/Collapse';
import { CollapseItemContext } from '@/ui/collapse/CollapseItem';

import { cn } from '@/utils/cn';

export const CollapseItemHeader: FC<CollapseItemHeaderProps> = ({ id, className, children, ...props }) => {
    const { size, icon } = useContext(CollapseContext);
    const { isChecked, changeChecked } = useContext(CollapseItemContext);

    const sizeStyle = collapseSize[size];
    const rotateStyle = isChecked ? 'rotate-90' : 'rotate-0';

    return (
        <div
            className={cn(collapseItemHeaderDefaultStyles, sizeStyle, className)}
            onClick={() => changeChecked((prev) => !prev)}
            {...props}
        >
            <span className={cn(collapseItemHeaderLabelDefaultStyles, rotateStyle)}>{icon}</span>
            <h4>{children}</h4>
        </div>
    );
};
