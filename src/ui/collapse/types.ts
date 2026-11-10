import type { Dispatch, HTMLAttributes, JSX, SetStateAction } from 'react';

export type CollapseSize = 'sm' | 'md' | 'lg';
export type CollapseVariant = 'default' | 'accordion';

export type CollapseItemData = {
    isChecked: boolean;
    changeChecked: Dispatch<SetStateAction<boolean>>;
};

export interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
    size?: CollapseSize;
    icon?: JSX.Element;
}

export interface CollapseContextData {
    size: CollapseSize;
    icon: JSX.Element;
}

export interface CollapseItemProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
}

export interface CollapseItemHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export interface CollapseItemBodyProps extends HTMLAttributes<HTMLDivElement> {}
