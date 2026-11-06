import type { FormHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export interface FormItemProps extends HTMLAttributes<HTMLElement> {}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}
