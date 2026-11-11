import { type FC, useState } from 'react';
import type { NotificationContainerProps } from '@/ui/notification/types';
import { notificationContainerDefaultStyles, notificationContainerPosition } from '@/ui/notification/styles';

import { Teleport } from '@/ui/shared/Teleport';

import { cn } from '@/utils/cn';

import { Notification } from '@/ui/notification/Notification';

export const NotificationContainer: FC<NotificationContainerProps> = ({
    notifications,
    position,
    className,
    dismiss,
    children,
    ...props
}) => {
    const [hovered, setHovered] = useState<boolean>(false);

    const positionStyle = notificationContainerPosition[position];

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <Teleport target="notification-root">
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={cn(notificationContainerDefaultStyles, positionStyle, className)}
                {...props}
            >
                {notifications.map((n) => (
                    <Notification key={n.id} dismiss={dismiss} notification={n} position={position} hovered={hovered} />
                ))}
            </div>
        </Teleport>
    );
};
