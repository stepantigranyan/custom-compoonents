import type { Dispatch, HTMLAttributes, JSX, SetStateAction } from 'react';

export type collapse_size = 'sm' | 'md' | 'lg';

export type collapse_item_data = {
    isChecked: boolean;
    changeChecked: Dispatch<SetStateAction<boolean>>;
};

export interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
    size?: collapse_size;
    icon?: JSX.Element;
}

export interface CollapseItemProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
}

export interface CollapseItemHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export interface CollapseItemBodyProps extends HTMLAttributes<HTMLDivElement> {}
