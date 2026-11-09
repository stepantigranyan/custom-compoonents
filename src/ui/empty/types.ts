import type { HTMLAttributes, ImgHTMLAttributes } from 'react';

export type EmptySize = 'sm' | 'md' | 'lg';
export type EmptyImg = 'default' | 'notFound';

export interface EmptyProps extends HTMLAttributes<HTMLDivElement> {
    imgSize?: EmptySize;
    imgVariant?: EmptyImg;
    title?: string;
    description?: string;
}

export interface EmptyImgProps extends ImgHTMLAttributes<HTMLImageElement> {
    size?: EmptySize;
    variant?: EmptyImg;
}

export interface EmptyBodyProps extends HTMLAttributes<HTMLDivElement> {
    size?: EmptySize;
}

export interface EmptyTitleProps extends HTMLAttributes<HTMLDivElement> {
    size?: EmptySize;
}

export interface EmptyDescriptionProps extends HTMLAttributes<HTMLDivElement> {
    size?: EmptySize;
}
