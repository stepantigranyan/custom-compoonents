import type { ButtonHTMLAttributes, HTMLAttributes, ReactElement } from 'react';

export type modal_mask = 'blur' | 'dimmed' | 'none';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    maskType?: modal_mask;
    target?: string;
    maskStyles?: string;
    trigger?: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
}

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {}

export interface ModalActionsProps extends HTMLAttributes<HTMLDivElement> {
    close?: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
    submit?: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
    cancel?: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
}
