import {type FC, useLayoutEffect, useRef, useState} from 'react';
import type { NotificationProps } from '@/ui/notification/types';

import { notificationDefaultStyles, notificationAddingPosition, notificationVariant } from '@/ui/notification/styles';

import { cn } from '@/utils/cn';

import { X } from 'lucide-react';
import { Button } from '@/ui/button/Button.tsx';

export const Notification: FC<NotificationProps> = ({
    notification,
    position,
    dismiss,
    hovered,
    handleMouseEnter,
    handleMouseLeave,
}) => {
    const { id, data, options, status } = notification;
    const { title, message } = data;
    const { variant, duration, actions, autoClose } = options;

    const [visible, setVisible] = useState<boolean>(true);
    const timerId = useRef<number | null>(null);

    const handleAnimationEnd = () => {
        if (status === 'exiting') {
            setVisible(false);
        }
    };

    const handleRemove = () => {
        clearTimeout(timerId.current);
        dismiss(id, position);
    };

    useLayoutEffect(() => {
        if (status === 'exiting') {
            setVisible(false);
            return;
        }

        if (!autoClose) {
            return;
        }

        if (hovered) {
            clearTimeout(timerId.current);
            return;
        }

        timerId.current = setTimeout(() => {
            dismiss(id, position);
        }, duration);

        return () => {
            clearTimeout(timerId.current);
        };
    }, [hovered]);

    let animationStyles: string;
    const variantStyles = notificationVariant[variant];

    switch (status) {
        case 'entering':
            animationStyles = notificationAddingPosition[position].open;
            break;
        case 'exiting':
            animationStyles = notificationAddingPosition[position].close;
            break;
    }

    return (
        <>
            {visible && (
                <div
                    onMouseEnter={() => handleMouseEnter(position)}
                    onMouseLeave={() => handleMouseLeave(position)}
                    onAnimationEnd={handleAnimationEnd}
                    className={cn(notificationDefaultStyles, variantStyles, animationStyles)}
                >
                    <X size={20} className="absolute top-2 right-2" onClick={handleRemove} />
                    {title && <strong>{title}</strong>}
                    <p>{message}</p>
                    <div className="flex justify-end gap-x-1">
                        {actions.map((i) => (
                            <Button
                                key={i.title}
                                size="xs"
                                color={i.color}
                                variant={i.variant}
                                onClick={() => i.onClick()}
                            >
                                {i.title}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
