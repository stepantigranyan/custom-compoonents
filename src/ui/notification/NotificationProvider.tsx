import {createContext, type FC, useCallback, useEffect, useState} from 'react';
import type {
    NotificationCreationData,
    NotificationData,
    NotificationOptions, NotificationPosition,
    NotificationProviderProps,
} from '@/ui/notification/types';

import { v4 as uuidv4 } from 'uuid';

import { NotificationContainer } from '@/ui/notification/NotificationContainer';

export const NotificationContext = createContext<{
    notify: (obj: {data: NotificationCreationData, options?: NotificationOptions}) => string;
    remove: (id: string) => void;
    dismiss: (id: string) => void;
}>(null);

export const NotificationProvider: FC<NotificationProviderProps> = ({ className, children, ...props }) => {
    const [notifications, setNotifications] = useState<NotificationData[]>([]);
    const [position, setPosition] = useState<NotificationPosition>('bottomRight');

    const notify = useCallback(
        (obj: { data: NotificationCreationData, options?: NotificationOptions }) => {
            const { data, options } = obj;

            setPosition(options?.position ?? 'bottomRight');

            const id = uuidv4();

            const notification: NotificationData = {
                id,
                status: 'entering',
                data: {
                    message: data.message,
                    title: data.title,
                },
                options: {
                    position: options?.position ?? 'bottomRight',
                    actions: options.actions ?? [],
                    duration: options?.duration ?? 3000,
                    variant: options?.variant ?? 'default',
                },
            };

            const newNotifications = [notification, ...notifications];
            setNotifications(newNotifications);

            return id;
        },
        [notifications]
    );

    const dismiss = useCallback((id: string) => {
        setNotifications((prev) => prev.map((i) => (i.id === id ? { ...i, status: 'exiting' } : i)));
    }, []);

    const remove = useCallback((id: string) => {
        setNotifications((prev) => prev.filter((i) => i.id !== id));
    }, []);

    return (
        <NotificationContext.Provider value={{ notify, dismiss, remove }}>
            <NotificationContainer
                position={position}
                notifications={notifications}
                dismiss={dismiss}
                className={className}
                {...props}
            />
            {children}
        </NotificationContext.Provider>
    );
};
