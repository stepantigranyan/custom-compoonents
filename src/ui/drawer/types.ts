import type { ButtonHTMLAttributes, HTMLAttributes, ReactElement } from 'react';

export type DrawerPosition = 'top' | 'left' | 'right' | 'bottom';
export type DrawerMask = 'blur' | 'dimmed' | 'none';

export type DrawerCloseButtonPosition = 'left' | 'right';

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
    position?: DrawerPosition;
    maskType?: DrawerMask;
    maskStyles?: string;
    trigger?: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
    target?: string;
    resize?: boolean;
    showCloseButton?: boolean;
}

export interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
    showCloseButton?: boolean;
    closeButtonPosition?: DrawerCloseButtonPosition;
}

export interface DrawerBodyProps extends HTMLAttributes<HTMLDivElement> {}

export interface DrawerCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
