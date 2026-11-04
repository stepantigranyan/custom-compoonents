import type { empty_img, empty_size } from '@/ui/empty/types.ts';

export const emptyImgSize: Record<empty_size, string> = {
    sm: 'size-20',
    md: 'size-40',
    lg: 'size-60',
};

export const emptyImg: Record<empty_img, string> = {
    default:
        'https://cdni.iconscout.com/illustration/premium/thumb/data-not-found-illustration-svg-download-png-9404367.png',
    notFound:
        'https://png.pngtree.com/png-vector/20260425/ourmid/pngtree-cute-robot-character-displaying-404-page-not-found-error-png-image_19174372.webp',
};

export const emptyTitleSize: Record<empty_size, string> = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
};

export const emptyDescriptionSize: Record<empty_size, string> = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-md',
};

export const emptyDefaultStyles = 'p-3 w-full h-full flex items-center justify-center';
export const emptyBodyDefaultStyles = 'p-1 flex flex-col items-center justify-center';
export const emptyTitleDefaultStyles = 'font-bold flex items-center gap-x-2 shrink-0 text-gray-600';
export const emptyDescriptionDefaultStyles = 'flex items-center gap-x-1 shrink-0 text-gray-500';
