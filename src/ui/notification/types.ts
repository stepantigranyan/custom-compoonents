import type { HTMLAttributes, JSX } from 'react';

export type NotificationPosition = 'topLeft' | 'top' | 'topRight' | 'bottomLeft' | 'bottom' | 'bottomRight';
export type NotificationAddingPosition = 'top' | 'left' | 'bottom' | 'right';

export interface NotificationGroupProps extends HTMLAttributes<HTMLDivElement> {
    position?: NotificationPosition;
    notifications?: NotificationData[];
    trigger?: JSX.Element;
}

export interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    actions?: HTMLButtonElement[];
    isFirst?: boolean;
}

export interface NotificationData {
    title?: string;
    description?: string;
    actions?: HTMLButtonElement[];
}
