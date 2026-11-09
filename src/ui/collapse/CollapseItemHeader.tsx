import { type FC, useContext } from 'react';
import type { CollapseItemHeaderProps } from '@/ui/collapse/types';

import {
    collapseItemHeaderDefaultStyles,
    collapseItemHeaderLabelDefaultStyles,
    collapseSize,
} from '@/ui/collapse/styles';

import { CollapseContext } from '@/ui/collapse/Collapse';
import { CollapseItemContext } from '@/ui/collapse/CollapseItem';

import { v4 as uuidv4 } from 'uuid';

import { cn } from '@/utils/cn';

export const CollapseItemHeader: FC<CollapseItemHeaderProps> = ({ id, className, children, ...props }) => {
    const generatedId = id || uuidv4();
    const { size, icon } = useContext(CollapseContext);
    const { isChecked, changeChecked } = useContext(CollapseItemContext);

    const sizeStyle = collapseSize[size];
    const rotateStyle = isChecked ? 'rotate-90' : 'rotate-0';

    return (
        <div
            className={cn(collapseItemHeaderDefaultStyles, sizeStyle, className)}
            onClick={() => changeChecked((prev) => !prev)}
        >
            <input
                id={generatedId}
                type="checkbox"
                className="hidden"
                onClick={(event) => event.stopPropagation()}
                {...props}
            />
            <label htmlFor={generatedId} className={cn(collapseItemHeaderLabelDefaultStyles, rotateStyle)}>
                <span>{icon}</span>
            </label>
            <h4>{children}</h4>
        </div>
    );
};
