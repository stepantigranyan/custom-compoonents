import type { collapse_size } from '@/ui/collapse/types.ts';

export const collapseSize: Record<collapse_size, string> = {
    sm: 'text-sm px-3 py-2',
    md: 'text-md px-3 py-3',
    lg: 'text-lg px-3 py-4',
};

export const collapseDefaultStyles = 'border border-solid border-gray-400 rounded-md flex flex-col overflow-hidden';
export const collapseItemDefaultStyles =
    'cursor-pointer not-last:border-b not-last:border-b-solid not-last:border-b-gray-400';
export const collapseItemHeaderDefaultStyles = 'bg-gray-200 flex items-center gap-x-1 shrink-0';
export const collapseItemHeaderLabelDefaultStyles = 'cursor-pointer transition-all duration-200';
export const collapseItemBodyDefaultStyles =
    'relative grid shrink-0 transition-[grid-template-rows] duration-355 ease-in-out';
