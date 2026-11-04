import { type FC, createContext, useContext, useState, useRef } from 'react';

import type {
    collapse_item_data,
    CollapseItemBodyProps,
    CollapseItemHeaderProps,
    CollapseItemProps,
    CollapseProps,
} from '@/ui/collapse/types.ts';

import {
    collapseDefaultStyles,
    collapseItemBodyDefaultStyles,
    collapseItemDefaultStyles,
    collapseItemHeaderDefaultStyles,
    collapseItemHeaderLabelDefaultStyles,
    collapseSize,
} from '@/ui/collapse/styles.ts';

import { ChevronRight } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/utils/cn';

const CollapseContext = createContext<CollapseProps | null>(null);
const CollapseItemContext = createContext<collapse_item_data | null>(null);

export const Collapse: FC<CollapseProps> = ({
    size = 'md',
    icon = <ChevronRight size={20} />,
    className,
    children,
    ...props
}) => {
    return (
        <CollapseContext.Provider value={{ size, icon }}>
            <div className={cn(collapseDefaultStyles, className)} {...props}>
                {children}
            </div>
        </CollapseContext.Provider>
    );
};

export const CollapseItem: FC<CollapseItemProps> = ({ children, open = false }) => {
    const [checked, setChecked] = useState<boolean>(open);
    const data: collapse_item_data = {
        isChecked: checked,
        changeChecked: setChecked,
    };

    return (
        <CollapseItemContext.Provider value={data}>
            <div className={cn(collapseItemDefaultStyles)}>{children}</div>
        </CollapseItemContext.Provider>
    );
};

export const CollapseItemHeader: FC<CollapseItemHeaderProps> = ({ className, children, ...props }) => {
    const id = useRef<string>(uuidv4());
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
                id={id.current}
                type="checkbox"
                className="hidden"
                onClick={(event) => event.stopPropagation()}
                {...props}
            />
            <label htmlFor={id.current} className={cn(collapseItemHeaderLabelDefaultStyles, rotateStyle)}>
                <span>{icon}</span>
            </label>
            <h4>{children}</h4>
        </div>
    );
};

export const CollapseItemBody: FC<CollapseItemBodyProps> = ({ className, children, ...props }) => {
    const { size } = useContext(CollapseContext);
    const { isChecked } = useContext(CollapseItemContext);

    const sizeStyle = collapseSize[size];
    const showStyle = isChecked ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]';

    return (
        <div className={cn(collapseItemBodyDefaultStyles, showStyle, className)} {...props}>
            <div className="overflow-hidden">
                <div className={cn(sizeStyle, 'break-all')}>{children}</div>
            </div>
        </div>
    );
};
