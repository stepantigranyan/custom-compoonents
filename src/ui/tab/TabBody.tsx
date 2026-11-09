import { type FC, useContext } from 'react';
import type { TabPageProps } from '@/ui/tab/types';
import { tabPageDefaultStyles } from '@/ui/tab/styles';

import { TabContext } from '@/ui/tab/Tab';
import { cn } from '@/utils/cn';

export const TabBody: FC<TabPageProps> = ({ className, children, ...props }) => {
    const { data, page } = useContext(TabContext);
    return (
        <div className={cn(tabPageDefaultStyles, className)} {...props}>
            {data[page].children}
        </div>
    );
};
