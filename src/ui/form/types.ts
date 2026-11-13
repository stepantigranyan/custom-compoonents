import type { FormHTMLAttributes, InputHTMLAttributes } from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export interface FormItemProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
