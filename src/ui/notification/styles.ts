import type { NotificationPosition } from '@/ui/notification/types.ts';

export const notificationPosition: Record<NotificationPosition, string> = {
    topLeft: 'left-5 top-5 flex-col',
    top: 'left-1/2 top-5 -translate-x-1/2 flex-col left-5 top-5 flex-col',
    topRight: 'right-5 top-5 flex-col left-5 top-5 flex-col',
    bottomLeft: 'left-5 bottom-5 flex-col-reverse',
    bottom: 'left-1/2 bottom-5 -translate-x-1/2 flex-col-reverse',
    bottomRight: 'right-5 bottom-5 flex-col-reverse',
}

export const notificationAddingPosition: Record<NotificationPosition, { open: string; close: string }> = {
    topLeft: {
        open: 'animate-[openLeftNtfc_0.3s_linear_forwards]',
        close: 'animate-[closeLeftNtfc_0.3s_linear_forwards]',
    },
    top: {
        open: ' animate-[openTopNtfc_0.3s_linear_forwards]',
        close: 'animate-[closeTopNtfc_0.3s_linear_forwards]',
    },
    topRight: {
        open: ' animate-[openRightNtfc_0.3s_linear_forwards]',
        close: 'animate-[openRightNtfc_0.3s_linear_forwards]',
    },
    bottomLeft: {
        open: ' animate-[openLeftNtfc_0.3s_linear_forwards]',
        close: 'animate-[closeLeftNtfc_0.3s_linear_forwards]',
    },
    bottom: {
        open: ' animate-[openBottomNtfc_0.3s_linear_forwards]',
        close: 'animate-[closeBottomNtfc_0.3s_linear_forwards]',
    },
    bottomRight: {
        open: ' animate-[openRightNtfc_0.3s_linear_forwards]',
        close: 'animate-[closeRightNtfc_0.3s_linear_forwards]',
    },
};

export const notificationGroupDefaultStyles = 'fixed max-h-screen w-110';
export const notificationDefaultStyles =
    'absolute p-2 w-100 min-h-20 flex items-center justify-center rounded-md bg-white border border-solid border-gray-300 shadow-lg z-50 transition-all duration-200 delay-200 animate-[removeNotification_0.2s_ease_2s]';
export const addednotificationDefaultStyles = 'top-(--top)'