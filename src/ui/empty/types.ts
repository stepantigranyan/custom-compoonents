import type { HTMLAttributes, ImgHTMLAttributes } from 'react';

export type empty_size = 'sm' | 'md' | 'lg';
export type empty_img = 'default' | 'notFound';

export interface EmptyProps extends HTMLAttributes<HTMLDivElement> {}

export interface EmptyImgProps extends ImgHTMLAttributes<HTMLImageElement> {
    size?: empty_size;
    variant?: empty_img;
}

export interface EmptyBodyProps extends HTMLAttributes<HTMLDivElement> {
    size?: empty_size;
}

export interface EmptyTitleProps extends HTMLAttributes<HTMLDivElement> {
    size?: empty_size;
}

export interface EmptyDescriptionProps extends HTMLAttributes<HTMLDivElement> {
    size?: empty_size;
}
