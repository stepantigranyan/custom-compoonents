import type { DDMenuItemModel, DDMenuPlacement } from '@/ui/dropdown/types';

export const ddItemModel: Record<DDMenuItemModel, string> = {
    default: 'cursor-pointer bg-transparent hover:hover:bg-gray-200',
    danger: 'cursor-pointer text-red-600 bg-red-200 hover:bg-red-300',
    warning: 'cursor-pointer text-yellow-600 bg-yellow-200 hover:bg-yellow-300',
    disabled: 'cursor-not-allowed pointer-events-none text-gray-400 bg-gray-100 border-gray-400',
};

export const ddMenuPlacement: Record<DDMenuPlacement, string> = {
    topLeft:
        'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pb-2 bottom-full left-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible',
    top: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pb-2 bottom-full left-1/2 -translate-x-1/2 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible',
    topRight:
        'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pb-2 bottom-full right-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible',
    bottomLeft:
        'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pt-2 top-full left-0 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible',
    bottom: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pt-2 top-full left-1/2 -translate-x-1/2 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible',
    bottomRight:
        'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pt-2 top-full right-0 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible',
    leftTop:
        'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pr-2 right-full bottom-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible',
    left: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pr-2 right-full top-1/2 -translate-y-1/2 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible',
    leftBottom:
        'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pr-2 right-full top-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible',
    rightTop:
        'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pl-2 left-full bottom-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible',
    right: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pl-2 left-full top-1/2 -translate-y-1/2 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible',
    rightBottom:
        'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pl-2 left-full top-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible',
};

export const dropdownItemDefaultStyles =
    'relative px-2 py-1 inline-flex gap-x-5 shrink-0 items-center px-2 py-1 rounded-md transition-all duration-200';
export const dropdownDefaultStyles = 'flex flex-col gap-y-1 bg-white w-max shadow-md rounded-md p-1';
