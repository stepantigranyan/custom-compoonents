import type { DDMenuItemModel, DDMenuPlacement } from '@/ui/dropdown/types';

export const ddItemModel: Record<DDMenuItemModel, string> = {
    default: 'cursor-pointer bg-transparent hover:hover:bg-gray-200',
    danger: 'cursor-pointer text-red-600 bg-red-200 hover:bg-red-300',
    warning: 'cursor-pointer text-yellow-600 bg-yellow-200 hover:bg-yellow-300',
    disabled: 'cursor-not-allowed pointer-events-none text-gray-400 bg-gray-100 border-gray-400',
};

export const ddMenuPlacement: Record<DDMenuPlacement, string> = {
    topLeft: 'pb-2 bottom-full left-0 translate-y-2',
    top: 'pb-2 bottom-full left-1/2 -translate-x-1/2 translate-y-2',
    topRight: 'pb-2 bottom-full right-0 translate-y-2',
    bottomLeft: 'pt-2 top-full left-0 -translate-y-2',
    bottom: 'pt-2 top-full left-1/2 -translate-x-1/2 -translate-y-2',
    bottomRight: 'pt-2 top-full right-0 -translate-y-2',
    leftTop: 'pr-2 right-full bottom-0 translate-x-2',
    left: 'pr-2 right-full top-1/2 -translate-y-1/2 translate-x-2',
    leftBottom: 'pr-2 right-full top-0 translate-x-2',
    rightTop: 'pl-2 left-full bottom-0 -translate-x-2',
    right: 'pl-2 left-full top-1/2 -translate-y-1/2 -translate-x-2',
    rightBottom: 'pl-2 left-full top-0 -translate-x-2',
};

export const dropdownItemDefaultStyles =
    'relative px-2 py-1 inline-flex gap-x-5 shrink-0 items-center px-2 py-1 rounded-md transition-all duration-200';
export const dropdownDefaultStyles = 'flex flex-col gap-y-1 bg-white w-max shadow-md rounded-md p-1';
export const dropdownMenuPositionDefaultStyles =
    'absolute flex flex-col gap-y-1 bg-transparent z-100 transition-all duration-200 ease-out';
