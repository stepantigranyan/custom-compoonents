import type { DrawerMask, DrawerPosition } from '@/ui/drawer/types';

export const drawerPosition: Record<DrawerPosition, string> = {
    top: 'top-0 left-0 right-0 w-full h-fit h-1/8 border-b border-b-solid border-b-gray-400 shadow-[0_4px_10px_-1px_rgba(0,0,0,0.5)]',
    left: 'left-0 top-0 bottom-0 w-fit h-screen border-r border-r-solid border-r-gray-400 shadow-[0_4px_10px_-1px_rgba(0,0,0,0.5)]',
    right: 'right-0 top-0 bottom-0 w-fit h-screen border-l border-l-solid border-l-gray-400 shadow-[-4px_0_10px_-1px_rgba(0,0,0,0.5)]',
    bottom: 'bottom-0 left-0 right-0 w-full h-fit border-t border-t-solid border-t-gray-400 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.5)]',
};

export const drawerMask: Record<DrawerMask, string> = {
    blur: 'backdrop-blur-xs',
    dimmed: '',
    none: '!bg-transparent',
};

export const drawerAnimations: Record<DrawerPosition, { open: string; close: string }> = {
    left: {
        open: 'animate-[openLeftDrawer_0.3s_linear_forwards]',
        close: 'animate-[closeLeftDrawer_0.3s_linear_forwards]',
    },
    right: {
        open: 'animate-[openRightDrawer_0.3s_linear_forwards]',
        close: 'animate-[closeRightDrawer_0.3s_linear_forwards]',
    },
    top: {
        open: 'animate-[openTopDrawer_0.3s_linear_forwards]',
        close: 'animate-[closeTopDrawer_0.3s_linear_forwards]',
    },
    bottom: {
        open: 'animate-[openBottomDrawer_0.3s_linear_forwards]',
        close: 'animate-[closeBottomDrawer_0.3s_linear_forwards]',
    },
};

export const maskAnimations = {
    open: 'animate-[openMask_0.2s_linear_forwards]',
    close: 'animate-[closeMask_0.2s_linear_forwards]',
};

export const drawerResizable: Record<DrawerPosition, string> = {
    top: 'resize-y',
    left: 'resize-x',
    right: 'resize-x',
    bottom: 'resize-y',
};

export const maskDefaultStyles = 'top-0 left-0 z-200 w-full h-full';
export const drawerDefaultStyles = 'absolute p-5 bg-white flex flex-col z-210 overflow-auto';
export const drawerHeaderDefaultStyles = 'w-full flex items-center justify-between shrink-0 gap-x-2 py-2';
export const drawerHeaderCloseButtonDefaultStyles =
    'cursor-pointer p-2 rounded-full transition-all duration-200 hover:bg-gray-100';
