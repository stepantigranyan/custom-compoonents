import { type HTMLAttributes, type JSX } from 'react';

export type tab_size = 'sm' | 'md' | 'lg';
export type tab_direction = 'horizontal' | 'vertical';
export type tab_context_position = 'start' | 'center' | 'end';
export type tab_position = 'top' | 'left' | 'bottom' | 'right';

export interface TabItemProps {
    key: string;
    title: string;
    icon?: JSX.Element;
    children?: JSX.Element;
}

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
    size?: tab_size;
    direction?: tab_direction;
    contextPosition?: tab_context_position;
    data?: TabItemProps[];
    currentPage?: number;
    activePosition?: tab_position;
    position?: tab_position;
}

export interface TabHeaderProps extends HTMLAttributes<HTMLDivElement> {
    position?: tab_position;
    currentPage?: number;
}

export interface TabPageProps extends HTMLAttributes<HTMLDivElement> {}
