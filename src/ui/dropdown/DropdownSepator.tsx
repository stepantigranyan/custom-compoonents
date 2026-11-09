import type { FC } from 'react';
import type { DropDownSeparatorProps } from '@/ui/dropdown/types';

import { cn } from '@/utils/cn';

export const DropdownSeparator: FC<DropDownSeparatorProps> = ({ className }) => {
    return <div className={cn('w-full h-px bg-gray-300', className)}></div>;
};
