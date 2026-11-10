import type { HTMLAttributes, JSX } from 'react';

export type NotificationPosition = 'topLeft' | 'top' | 'topRight' | 'bottomLeft' | 'bottom' | 'bottomRight';
export type NotificationVariant = 'default' | 'destructive' | 'success';

export interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
    position?: NotificationPosition;
    limit?: number;
    data?: NotificationData;
    trigger?: JSX.Element;
}

export interface NotificationItemProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    variant?: NotificationVariant;
    openAnimation?: string;
    closeAnimation?: string;
    hovered?: boolean;
    dismiss?: (id: string) => void;
}

export interface NotificationData {
    id?: string;
    title?: string;
    description?: string;
    variant?: NotificationVariant;
}
