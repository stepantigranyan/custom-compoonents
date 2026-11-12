import { type FC, useState } from 'react';
import type {NotificationContainerProps, NotificationPosition} from '@/ui/notification/types';

import { Teleport } from '@/ui/shared/Teleport';

import { Notification } from '@/ui/notification/Notification';

const NOTIFICATIONS_POSITION: NotificationPosition[] = ['topLeft', 'top', 'topRight', 'bottomLeft', 'bottom', 'bottomRight'];

export const NotificationContainer: FC<NotificationContainerProps> = ({ notifications, dismiss }) => {
    const [hovered, setHovered] = useState<Record<NotificationPosition, boolean>>({
        topLeft: false,
        top: false,
        topRight: false,
        bottomLeft: false,
        bottom: false,
        bottomRight: false,
    });

    const handleMouseEnter = (position: NotificationPosition) => {
        setHovered((prev) => ({ ...prev, [position]: true}));
    };

    const handleMouseLeave = (position: NotificationPosition) => {
        setHovered((prev) => ({ ...prev, [position]: false}));
    };

    return (
        <>
            {
                NOTIFICATIONS_POSITION.map((p) => {
                    return notifications[p].map((n) => (
                        <Teleport target={p} key={n.id}>
                            <Notification
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                                dismiss={dismiss}
                                notification={n}
                                position={p}
                                hovered={hovered[p]}
                            />
                        </Teleport>
                    ))
                })
            }
        </>
    );
};
