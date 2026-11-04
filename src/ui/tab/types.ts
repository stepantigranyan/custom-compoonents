import { type HTMLAttributes, type JSX } from 'react';

export type tab_size = 'sm' | 'md' | 'lg';
export type tab_direction = 'horizontal' | 'vertical';
export type tab_position = 'start' | 'center' | 'end';

export interface TabItemProps {
    key: string;
    title: string;
    icon?: JSX.Element;
    children?: JSX.Element;
}

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
    size?: tab_size;
    direction?: tab_direction;
    position?: tab_position;
    data?: TabItemProps[];
    currentPage?: number;
}

export interface TabPageProps extends HTMLAttributes<HTMLDivElement> {}
