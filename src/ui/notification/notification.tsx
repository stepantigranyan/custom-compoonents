import {
    type ButtonHTMLAttributes,
    type FC,
    type HTMLAttributes,
    type ReactElement,
    isValidElement,
    cloneElement,
    useEffect,
    useState,
    useRef,
} from 'react';

import type { NotificationGroupProps, NotificationProps } from './types';
import {
    notificationDefaultStyles,
    notificationGroupDefaultStyles,
    notificationPosition,
    notificationAddingPosition,
    addednotificationDefaultStyles,
} from '@/ui/notification/styles.ts';

import { Teleport } from '@/ui/shared/Teleport.tsx';

import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/utils/cn';

const NotificationGroup: FC<NotificationGroupProps> = ({
    notifications,
    position = 'topRight',
    trigger,
    className,
    ...props
}) => {
    const visibleNotifications = useRef<number>(1);
    const [visible, setVisible] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);
    const timer = useRef<number | null>(null);

    useEffect(() => {
        if (open) {
            setVisible(true);
            timer.current = setTimeout(() => {
                setOpen(false);
            }, 2000);
        }

        return () => {
            clearTimeout(timer.current);
            visibleNotifications.current = 1;
        }
    }, [open]);

    const positionStyle = notificationPosition[position];

    const openAnimation = notificationAddingPosition[position].open;
    const closeAnimation = notificationAddingPosition[position].close;

    const sendNtfc = () => {
        setOpen(true);

        if (visibleNotifications.current < 3) {
            visibleNotifications.current++;
        }

        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            setOpen(false);
        }, 2000);
    };

    const deleteNtfc = () => {
        clearTimeout(timer.current);
        setOpen(false);
    }

    const handleAnimationEnd = () => {
        if (!open) {
            setVisible(false);
            setHovered(false);
        }
    };

    const handleHoverStop = () => {
        clearTimeout(timer.current);
        setHovered(true);
    }

    const handleHoverReset = () => {
        timer.current = setTimeout(() => {
        setHovered(false);
            setOpen(false);
        }, 1000);
    }

    const renderedTrigger =
        trigger && isValidElement(trigger)
            ? cloneElement(trigger as ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>, {
                  onClick: (e) => {
                      const originalOnClick = (trigger.props as HTMLAttributes<HTMLButtonElement>).onClick;
                      if (originalOnClick) {
                          originalOnClick(e);
                      }

                      sendNtfc();
                  },
              })
            : null;

    return (
        <>
            {visible && (
                <Teleport target={'notification-root'}>
                    <div className={cn(notificationGroupDefaultStyles, className)} {...props}>
                        <div
                            onMouseEnter={handleHoverStop}
                            onMouseLeave={handleHoverReset}
                            className={`${hovered && 'h-screen'} overflow-y-auto scrollbar-none flex flex-col gap-y-1`}>
                            {
                                hovered ? notifications.map((item) => (
                                        <div
                                            key={uuidv4()}
                                            className={cn(
                                            notificationDefaultStyles, positionStyle,
                                                !open && closeAnimation,
                                                'relative',
                                            )}

                                            onAnimationEnd={handleAnimationEnd}
                                        >
                                            {item.title}
                                        </div>
                                    ))

                                    :

                                    notifications.slice(1, visibleNotifications.current).map((item, index) => (
                                            <div
                                                key={uuidv4()}
                                                style={{'--top': (4 - index) * 4 + 'px', zIndex: (3 - index) * 10}}
                                                className={cn(
                                                    notificationDefaultStyles, positionStyle,
                                                    !open && closeAnimation,
                                                    'top-(--top)',
                                                )}

                                                onAnimationEnd={handleAnimationEnd}
                                            >
                                                {item.title}
                                            </div>
                                        ))
                            }
                            <div
                                key={uuidv4()}
                                className={cn(
                                    notificationDefaultStyles,
                                    positionStyle,
                                    !hovered && (open ? openAnimation : closeAnimation),
                                    hovered && 'relative'
                                )}
                                onAnimationEnd={handleAnimationEnd}
                                onMouseEnter={handleHoverStop}
                                onMouseLeave={handleHoverReset}
                            >
                                {notifications[0].title}
                                <span onClick={deleteNtfc}>X</span>
                            </div>
                        </div>
                    </div>
                </Teleport>
            )}

            {renderedTrigger}
        </>
    );
};

export { NotificationGroup, type NotificationProps };
