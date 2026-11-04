import type { tab_direction, tab_position, tab_size } from '@/ui/tab/types.ts';

export const tabSize: Record<tab_size, string> = {
    sm: 'text-sm px-3 py-1',
    md: 'text-md px-5 py-2',
    lg: 'text-lg px-7 py-3',
};

export const tabDirection: Record<tab_direction, Record<tab_position, string>> = {
    horizontal: {
        start: ' w-full flex-row justify-start items-center border-y border-y-solid border-y-gray-300',
        center: ' w-full flex-row justify-center items-center border-y border-y-solid border-y-gray-300',
        end: ' w-full flex-row justify-end items-center border-y border-y-solid border-y-gray-300',
    },
    vertical: {
        start: 'h-full flex-col justify-start items-center border-x border-x-solid border-x-gray-300',
        center: 'h-full flex-col justify-center items-center border-x border-x-solid border-x-gray-300',
        end: 'h-full flex-col justify-end items-center border-x border-x-solid border-x-gray-300',
    },
};

export const tabDefaultStyles = 'flex';
export const tabPageDefaultStyles = 'p-5 rounded-md';
export const tabItemDefaultStyles =
    'cursor-pointer flex gap-x-1 whitespace-nowrap shrink-0 items-center text-inherit transition-all duration-200 hover:text-blue-500';
