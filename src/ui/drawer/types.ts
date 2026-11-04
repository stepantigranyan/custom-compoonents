import type { ButtonHTMLAttributes, HTMLAttributes, ReactElement } from 'react';

export type drawer_position = 'top' | 'left' | 'right' | 'bottom';
export type drawer_mask = 'blur' | 'dimmed' | 'none';

export type drawer_close_button_position = 'left' | 'right';

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
    position?: drawer_position;
    maskType?: drawer_mask;
    maskStyles?: string;
    trigger?: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
    target?: string;
    resize?: boolean;
    showCloseButton?: boolean;
}

export interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
    showCloseButton?: boolean;
    closeButtonPosition?: drawer_close_button_position;
}

export interface DrawerBodyProps extends HTMLAttributes<HTMLDivElement> {}

export interface DrawerCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
