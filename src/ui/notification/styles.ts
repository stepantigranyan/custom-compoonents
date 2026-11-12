import type { NotificationPosition, NotificationVariant } from '@/ui/notification/types';

export const notificationContainerPosition: Record<NotificationPosition, string> = {
    topLeft: 'left-5 top-5 flex-col',
    top: 'left-1/2 top-5 -translate-x-1/2 flex-col',
    topRight: 'right-5 top-5 flex-col',
    bottomLeft: 'left-5 bottom-5 flex-col-reverse',
    bottom: 'left-1/2 bottom-5 -translate-x-1/2 flex-col-reverse',
    bottomRight: 'right-5 bottom-5 flex-col-reverse',
};

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

export const notificationContainerDefaultStyles =
    'fixed max-h-screen overglow-x-visible overflow-y-auto w-110 flex flex-col gap-y-2 items-center scrollbar-none';
export const notificationDefaultStyles =
    'cursor-pointer relative p-2 w-100 min-h-25 flex flex-col justify-center rounded-md shadow-lg z-50';
