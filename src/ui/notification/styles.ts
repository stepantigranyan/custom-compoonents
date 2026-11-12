import type { NotificationPosition, NotificationVariant } from '@/ui/notification/types';

export const notificationAddingPosition: Record<NotificationPosition, { open: string; close: string }> = {
    topLeft: {
        open: 'animate-[openLeftNtfc_0.3s_ease-in-out_forwards]',
        close: 'animate-[closeLeftNtfc_0.3s_ease-in-out_forwards]',
    },
    top: {
        open: ' animate-[openTopNtfc_0.3s_ease-in-out_forwards]',
        close: 'animate-[closeTopNtfc_0.3s_ease-in-out_forwards]',
    },
    topRight: {
        open: ' animate-[openRightNtfc_0.3s_ease-in-out_forwards]',
        close: 'animate-[closeRightNtfc_0.3s_ease-in-out_forwards]',
    },
    bottomLeft: {
        open: ' animate-[openLeftNtfc_0.3s_ease-in-out_forwards]',
        close: 'animate-[closeLeftNtfc_0.3s_ease-in-out_forwards]',
    },
    bottom: {
        open: ' animate-[openBottomNtfc_0.3s_ease-in-out_forwards]',
        close: 'animate-[closeBottomNtfc_0.3s_ease-in-out_forwards]',
    },
    bottomRight: {
        open: ' animate-[openRightNtfc_0.3s_ease-in-out_forwards]',
        close: 'animate-[closeRightNtfc_0.3s_ease-in-out_forwards]',
    },
};

export const notificationVariant: Record<NotificationVariant, string> = {
    default: 'bg-white border border-solid border-gray-300',
    destructive: 'bg-red-100 border border-solid border-red-300',
    success: 'bg-emerald-100 border border-solid border-emerald-300',
};

export const notificationDefaultStyles =
    'cursor-pointer relative p-2 w-100 min-h-30 flex flex-col justify-center gap-y-5 rounded-md shadow-lg z-50';
