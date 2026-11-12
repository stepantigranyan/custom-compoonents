import { type FC, useState } from 'react';
import type { NotificationContainerProps } from '@/ui/notification/types';

import { Teleport } from '@/ui/shared/Teleport';

import { Notification } from '@/ui/notification/Notification';

export const NotificationContainer: FC<NotificationContainerProps> = ({ notifications, position, dismiss }) => {
    const [hovered, setHovered] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <>
            {notifications.map((n) => (
                <Teleport target={position} key={n.id}>
                    <Notification
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                        dismiss={dismiss}
                        notification={n}
                        position={position}
                        hovered={hovered}
                    />
                </Teleport>
            ))}
        </>
    );
};
