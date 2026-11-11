import { useContext } from 'react';

import { NotificationContext } from '@/ui/notification/NotificationProvider';

export const useNotification = () => {
    const { notify, dismiss, remove } = useContext(NotificationContext);

    return { notify, dismiss, remove };
};
