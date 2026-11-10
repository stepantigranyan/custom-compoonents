import {
    type ButtonHTMLAttributes,
    type FC,
    type HTMLAttributes,
    type ReactElement,
    isValidElement,
    cloneElement,
    useState,
    useEffect,
    useRef,
} from 'react';

import type { NotificationProps, NotificationItemProps } from './types';

import {
    notificationItemDefaultStyles,
    notificationDefaultStyles,
    notificationPosition,
    notificationItemVariant,
    notificationItemAddingPosition,
} from '@/ui/notification/styles';

import { useNotification } from '@/hooks/useNotification';

import { X } from 'lucide-react';

import { Teleport } from '@/ui/shared/Teleport';

import { cn } from '@/utils/cn';

import { Button } from '@/ui/button/Button';

export const NotificationItem: FC<NotificationItemProps> = ({
    id,
    title,
    description,
    openAnimation,
    hovered = false,
    closeAnimation,
    dismiss,
    variant = 'default',
}) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(true);

    const timerId = useRef<number | null>(null);

    console.log(timerId.current, 'id');

    useEffect(() => {
        if (!open) return;

        setVisible(true);

        if (!hovered) {
            timerId.current = setTimeout(() => setOpen(false), 4000);
        }

        return () => {
            if (timerId.current) {
                clearTimeout(timerId.current);
            }
        };
    }, [hovered, open]);

    const handleAnimationEnd = () => {
        if (!open) {
            setVisible(false);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        handleClose();
        dismiss(id);
    };

    const variantStyle = notificationItemVariant[variant];

    let color;

    switch (variant) {
        case 'default':
            color = 'gray';
            break;
        case 'success':
            color = 'green';
            break;
        case 'destructive':
            color = 'red';
            break;
    }

    return (
        <>
            {visible && (
                <div
                    onAnimationEnd={handleAnimationEnd}
                    className={cn(notificationItemDefaultStyles, variantStyle, open ? openAnimation : closeAnimation)}
                >
                    <div className="flex flex-col gap-y-1">
                        {title && <h3 className="text-sm font-semibold">{title}</h3>}
                        {description && <p className="text-xs">{description}</p>}
                        <div className="flex flex-row-reverse">
                            <Button onClick={handleDelete} size="sm" variant="filled" color={color}>
                                Delete
                            </Button>
                        </div>
                    </div>
                    <button
                        onClick={handleClose}
                        className="absolute right-2 top-2 rounded-full p-1 transition-color duration-200 hover:bg-gray-200"
                    >
                        <X size={20} />
                    </button>
                </div>
            )}
        </>
    );
};

export const Notification: FC<NotificationProps> = ({
    position = 'topRight',
    data,
    trigger,
    limit = 3,
    className,
    ...props
}) => {
    const { notifications, dismissNotification, addNotification } = useNotification(limit);
    const [hovered, setHovered] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const positionStyle = notificationPosition[position];
    const openAnimation = notificationItemAddingPosition[position].open;
    const closeAnimation = notificationItemAddingPosition[position].close;

    const renderedTrigger =
        trigger && isValidElement(trigger)
            ? cloneElement(trigger as ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>, {
                  onClick: (e) => {
                      const originalOnClick = (trigger.props as HTMLAttributes<HTMLButtonElement>).onClick;
                      if (originalOnClick) {
                          originalOnClick(e);
                      }

                      addNotification(data);
                  },
              })
            : null;

    return (
        <>
            <Teleport target="notification-root">
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={cn(notificationDefaultStyles, positionStyle, className)}
                    {...props}
                >
                    {notifications.map((n) => (
                        <NotificationItem
                            key={n.id}
                            hovered={hovered}
                            dismiss={dismissNotification}
                            openAnimation={openAnimation}
                            closeAnimation={closeAnimation}
                            {...n}
                        />
                    ))}
                </div>
            </Teleport>
            <div>{renderedTrigger}</div>
        </>
    );
};
