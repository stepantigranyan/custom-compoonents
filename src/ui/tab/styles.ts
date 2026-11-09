import type { TabDirection, TabContextPosition, TabSize, TabPosition } from '@/ui/tab/types';

export const tabSize: Record<TabSize, string> = {
    sm: 'text-sm px-3 py-1',
    md: 'text-md px-5 py-2',
    lg: 'text-lg px-7 py-3',
};

export const tabDirection: Record<TabDirection, Record<TabContextPosition, string>> = {
    horizontal: {
        start: ' w-full flex-row justify-start items-center',
        center: ' w-full flex-row justify-center items-center',
        end: ' w-full flex-row justify-end items-center',
    },
    vertical: {
        start: 'h-full flex-col justify-start items-center',
        center: 'h-full flex-col justify-center items-center',
        end: 'h-full flex-col justify-end items-center',
    },
};

export const tabPosition: Record<TabPosition, string> = {
    top: 'flex flex-col gap-y-1 w-full',
    bottom: 'flex flex-col-reverse gap-y-1 w-full',
    left: 'flex flex-row gap-x-1 w-full',
    right: 'flex flex-row-reverse gap-x-1 w-full',
};

export const tabDefaultStyles = 'flex';
export const tabPageDefaultStyles = 'p-5 rounded-md';
export const tabItemDefaultStyles =
    'cursor-pointer flex gap-x-1 whitespace-nowrap shrink-0 items-center text-inherit transition-all duration-200 hover:text-blue-500';

export const activeDefault = 'relative text-blue-500 after:absolute after:content-[""] after:block after:bg-blue-500';

export const activePosition: Record<TabPosition, string> = {
    top: 'after:top-0 after:left-1/2 after:w-2/3 after:h-[3px] after:-translate-x-1/2',
    left: 'after:left-0 after:top-1/2 after:w-[3px] after:h-1/2 after:-translate-y-1/2',
    right: 'after:right-0 after:top-1/2 after:w-[3px] after:h-1/2 after:-translate-y-1/2',
    bottom: 'after:bottom-0 after:left-1/2 after:w-2/3 after:h-[3px] after:-translate-x-1/2',
};
