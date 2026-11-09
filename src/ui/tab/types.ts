import { type HTMLAttributes, type JSX } from 'react';

export type TabSize = 'sm' | 'md' | 'lg';
export type TabDirection = 'horizontal' | 'vertical';
export type TabContextPosition = 'start' | 'center' | 'end';
export type TabPosition = 'top' | 'left' | 'bottom' | 'right';

export interface TabItemProps {
    key: string;
    title: string;
    icon?: JSX.Element;
    children?: JSX.Element;
}

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
    data?: TabItemProps[];
    currentPage?: number;
    position?: TabPosition;
}

export interface TabHeaderProps extends HTMLAttributes<HTMLDivElement> {
    contextPosition?: TabContextPosition;
    direction?: TabDirection;
    size?: TabSize;
    activePosition?: TabPosition;
    position?: TabPosition;
}

export interface TabPageProps extends HTMLAttributes<HTMLDivElement> {}
