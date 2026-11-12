import { type HTMLAttributes, type JSX } from 'react';

export type DDMenuPlacement =
    | 'top'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottom'
    | 'bottomRight'
    | 'leftTop'
    | 'left'
    | 'leftBottom'
    | 'rightTop'
    | 'right'
    | 'rightBottom';

export type DDMenuActionType = 'click' | 'hover';

export type DDMenuIconPlacement = 'left' | 'right';
export type DDMenuItemModel = 'default' | 'danger' | 'warning' | 'disabled';

export interface DropDownProps extends HTMLAttributes<HTMLUListElement> {
    placement?: DDMenuPlacement;
    trigger?: JSX.Element;
    actionType?: DDMenuActionType;
    open?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}

export interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {
    icon?: JSX.Element;
    iconPlacement?: DDMenuIconPlacement;
    model?: DDMenuItemModel;
}

export interface DropDownTriggerProps extends HTMLAttributes<HTMLElement> {}

export interface DropDownSeparatorProps {
    className?: string;
}
