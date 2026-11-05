import type { notification_adding_position, notification_position } from '@/ui/notification/types.ts';

export const notificationPosition: Record<notification_position, string> = {
    topLeft: 'left-5 top-5 flex-col',
    top: 'left-1/2 top-5 -translate-x-1/2 flex-col',
    topRight: 'right-5 top-5 flex-col',
    bottomLeft: 'left-5 bottom-5 flex-col-reverse',
    bottom: 'left-1/2 bottom-5 -translate-x-1/2 flex-col-reverse',
    bottomRight: 'right-5 bottom-5 flex-col-reverse',
};

export const notificationAnimations: Record<notification_adding_position, { open: string; close: string }> = {
    left: {
        open: 'animate-[openLeftNtfc_0.3s_linear_forwards]',
        close: 'animate-[closeLeftNtfc_0.3s_linear_forwards]',
    },
    right: {
        open: 'animate-[openRightNtfc_0.3s_linear_forwards]',
        close: 'animate-[closeRightNtfc_0.3s_linear_forwards]',
    },
    top: {
        open: 'animate-[openTopNtfc_0.3s_linear_forwards]',
        close: 'animate-[closeTopNtfc_0.3s_linear_forwards]',
    },
    bottom: {
        open: 'animate-[openBottomNtfc_0.3s_linear_forwards]',
        close: 'animate-[closeBottomNtfc_0.3s_linear_forwards]',
    },
};

export const notificationGroupDefaultStyles = 'fixed max-h-screen';
export const notificationDefaultStyles =
    'absolute p-2 min-w-100 min-h-20 flex items-center justify-center rounded-md bg-gray-200 shadow-lg z-50 transition-all duration-200 delay-200 animate-[removeNotification_0.2s_ease_2s]';
