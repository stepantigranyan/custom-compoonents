import { type FC, createContext } from 'react';

import type { CollapseProps } from '@/ui/collapse/types';

import { collapseDefaultStyles } from '@/ui/collapse/styles';

import { ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export const CollapseContext = createContext<CollapseProps | null>(null);

export const Collapse: FC<CollapseProps> = ({
    size = 'md',
    icon = <ChevronRight size={20} />,
    className,
    children,
    ...props
}) => {
    return (
        <CollapseContext.Provider value={{ size, icon }}>
            <div className={cn(collapseDefaultStyles, className)} {...props}>
                {children}
            </div>
        </CollapseContext.Provider>
    );
};
