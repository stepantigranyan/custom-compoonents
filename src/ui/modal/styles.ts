import type { modal_mask } from '@/ui/modal/types.ts';

export const modalMaskStyles: Record<modal_mask, string> = {
    blur: 'backdrop-blur-xs',
    dimmed: '',
    none: '!bg-transparent',
};

export const modalAnimations = {
    open: 'animate-[openModal_0.2s_linear_forwards]',
    close: 'animate-[closeModal_0.2s_linear_forwards]',
};

export const maskAnimations = {
    open: 'animate-[openMask_0.2s_linear_forwards]',
    close: 'animate-[closeMask_0.2s_linear_forwards]',
};

export const maskDefaultStyles = 'top-0 left-0 z-200 w-full h-full';
export const modalHeaderDefaultStyles = 'w-full flex items-center shrink-0 gap-x-2 py-2';
export const modalBodyDefaultStyles = 'w-full flex flex-col shrink-0 gap-y-2 py-2';
export const modalActionsDefaultStyles = 'w-full flex justify-end shrink-0 gap-x-2 py-2';
export const modalDefaultStyles =
    'absolute top-1/5 left-1/2 -translate-x-1/2 p-5 w-fit h-fit max-w-200 bg-white flex flex-col shadow-md rounded-md z-210 overflow-auto';
