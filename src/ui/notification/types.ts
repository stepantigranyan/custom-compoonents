import type { HTMLAttributes, JSX } from 'react';

export type notification_position = 'topLeft' | 'top' | 'topRight' | 'bottomLeft' | 'bottom' | 'bottomRight';
export type notification_adding_position = 'top' | 'left' | 'bottom' | 'right';

export interface NotificationGroupProps extends HTMLAttributes<HTMLDivElement> {
    position?: notification_position;
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
