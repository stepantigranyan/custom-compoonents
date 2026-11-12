import {createContext, type FC, useCallback, useRef, useState} from 'react';
import type {
    NotificationCreationData,
    NotificationData,
    NotificationOptions,
    NotificationPosition,
    NotificationProviderProps,
} from '@/ui/notification/types';

import { v4 as uuidv4 } from 'uuid';

import { NotificationContainer } from '@/ui/notification/NotificationContainer';

export const NotificationContext = createContext<{
    notify: (obj: { data: NotificationCreationData; options?: NotificationOptions }) => {
        id: string;
        position: NotificationPosition;
    };
    remove: (id: string, position: NotificationPosition) => void;
    dismiss: (id: string, position: NotificationPosition) => void
}>(null);

export const NotificationProvider: FC<NotificationProviderProps> = ({ className, children, ...props }) => {
    const positionRef = useRef<NotificationPosition>('bottomRight');
    const [notifications, setNotifications] = useState<Record<NotificationPosition, NotificationData[]>>({
        topLeft: [],
        top: [],
        topRight: [],
        bottomLeft: [],
        bottom: [],
        bottomRight: [],
    });

    const notify = useCallback(
        (obj: { data: NotificationCreationData; options?: NotificationOptions }) => {
            const { data, options } = obj;

            const id = uuidv4();

            const notification: NotificationData = {
                id,
                status: 'entering',
                isDisplayed: false,
                data: {
                    message: data.message,
                    title: data.title,
                },
                options: {
                    position: options?.position ?? 'bottomRight',
                    actions: options?.actions ?? [],
                    duration: options?.duration ?? 3000,
                    variant: options?.variant ?? 'default',
                    autoClose: options?.autoClose ?? true,
                },
            };

            positionRef.current = notification.options.position;

            setNotifications((prev) => ({
                ...prev,
                [positionRef.current]: [notification, ...prev[positionRef.current]],
            }));

            return { id, position: notification.options.position };
        },
        [notifications]
    );

    const dismiss = useCallback((id: string, position: NotificationPosition) => {
        setNotifications((prev) => ({
            ...prev,
            [position]: prev[position].map((i) => (i.id === id ? { ...i, status: 'exiting' } : i)),
        }));
    }, []);

    const remove = useCallback((id: string, position: NotificationPosition) => {
        setNotifications((prev) => ({
            ...prev,
            [position]: prev[position].filter((i) => i.id !== id),
        }));
    }, []);


    return (
        <NotificationContext.Provider value={{ notify, dismiss, remove }}>
            <NotificationContainer
                notifications={notifications}
                dismiss={dismiss}
                className={className}
                {...props}
            />
            {children}
        </NotificationContext.Provider>
    );
};
