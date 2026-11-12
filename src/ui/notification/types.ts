import type { HTMLAttributes } from 'react';
import type { BtnColor, BtnVariant } from '@/ui/button/types.ts';

export type NotificationPosition = 'topLeft' | 'top' | 'topRight' | 'bottomLeft' | 'bottom' | 'bottomRight';
export type NotificationVariant = 'default' | 'destructive' | 'success';
export type NotificationStatus = 'entering' | 'exiting';

export interface NotificationContainerProps extends HTMLAttributes<HTMLDivElement> {
    notifications: NotificationData[];
    position: NotificationPosition;
    dismiss: (id: string, position: NotificationPosition) => void;
}

export interface NotificationProps {
    position: NotificationPosition;
    notification: NotificationData;
    dismiss: (id: string, position: NotificationPosition) => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    hovered: boolean;
}

export interface NotificationProviderProps extends HTMLAttributes<HTMLDivElement> {}

export interface NotificationCreationData {
    title: string;
    message: string;
}

export interface NotificationData {
    id: string;
    data: NotificationCreationData;
    options?: NotificationOptions;
    status: NotificationStatus;
}

export interface NotificationOptions {
    position?: NotificationPosition;
    variant?: NotificationVariant;
    duration?: number;
    actions?: {
        title: string;
        onClick: () => void;
        color: BtnColor;
        variant: BtnVariant;
    }[];
}
