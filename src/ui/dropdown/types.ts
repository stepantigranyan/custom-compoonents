import { type HTMLAttributes, type JSX } from 'react';

export type dd_menu_placement =
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

export type dd_menu_action_type = 'click' | 'hover';

export type dd_item_icon_placement = 'left' | 'right';
export type dd_item_model = 'default' | 'danger' | 'warning' | 'disabled';

export interface DropDownProps extends HTMLAttributes<HTMLUListElement> {
    placement?: dd_menu_placement;
    trigger?: JSX.Element;
    actionType?: dd_menu_action_type;
    open?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}

export interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {
    icon?: JSX.Element;
    iconPlacement?: dd_item_icon_placement;
    model?: dd_item_model;
}

export interface DropDownSeparatorProps {
    className?: string;
}
