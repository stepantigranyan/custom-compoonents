import { useState } from 'react';
import type { NotificationData } from '@/ui/notification/types';

import { v4 as uuidv4 } from 'uuid';

export const useNotification = (limit: number) => {
    const [notifications, setNotifications] = useState<NotificationData[]>([]);
    const [visibleNotifications, setVisibleNotifications] = useState<NotificationData[]>([]);

    const dismissNotification = (id: string) => {
        const newNotifications = notifications.filter((notification) => notification.id !== id);
        setNotifications(newNotifications);
        setVisibleNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };

    const addNotification = (props: NotificationData) => {
        const id = uuidv4();

        const newNotification = { ...props, id };
        const newNotifications = [newNotification, ...notifications];
        setNotifications(newNotifications);
        setVisibleNotifications(newNotifications.slice(0, limit));

        return id;
    };

    const getAllNotifications = () => {
        return notifications;
    };

    return { notifications: visibleNotifications, dismissNotification, addNotification, getAllNotifications };
};
