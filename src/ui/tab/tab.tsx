import { type FC, type JSX, useState, useContext, createContext } from 'react';

import { type TabPageProps, type TabProps } from '@/ui/tab/types.ts';

import {
    tabSize,
    tabDirection,
    tabDefaultStyles,
    tabItemDefaultStyles,
    tabPageDefaultStyles,
} from '@/ui/tab/styles.ts';

import { cn } from '@/utils/cn';

const TabContext = createContext<{ page: JSX.Element }>(null);

export const Tab: FC<TabProps> = ({
    data = [],
    position = 'start',
    direction = 'horizontal',
    size = 'md',
    className,
    children,
    ...props
}) => {
    const [page, setPage] = useState<JSX.Element>(data[0].children);

    const directionStyle = tabDirection[direction][position];
    const sizeStyle = tabSize[size];

    const handleChangePage = (pg: JSX.Element) => {
        setPage(pg);
    };

    return (
        <TabContext.Provider value={{ page }}>
            <div className={direction === 'horizontal' ? 'flex flex-col gap-y-1 w-full' : 'flex gap-x-1 w-full'}>
                <div className={cn(tabDefaultStyles, directionStyle, className)} {...props}>
                    {data.map((item) => (
                        <div
                            key={item.key}
                            className={cn(tabItemDefaultStyles, sizeStyle)}
                            onClick={() => handleChangePage(item.children)}
                        >
                            {item.icon}
                            {item.title}
                        </div>
                    ))}
                </div>
                {children}
            </div>
        </TabContext.Provider>
    );
};

export const TabPage: FC<TabPageProps> = ({ className, children, ...props }) => {
    const { page } = useContext(TabContext);
    return (
        <div className={cn(tabPageDefaultStyles, className)} {...props}>
            {page}
        </div>
    );
};
