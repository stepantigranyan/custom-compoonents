import { type FC, type JSX, useState, useContext, createContext } from 'react';

import { type TabPageProps, type TabProps } from '@/ui/tab/types.ts';

import {
    tabSize,
    tabDirection,
    tabDefaultStyles,
    tabItemDefaultStyles,
    tabPageDefaultStyles,
    activeDefault,
    activePosition as ap,
    tabPosition as tp,
} from '@/ui/tab/styles.ts';

import { cn } from '@/utils/cn';

const TabContext = createContext<{ page: JSX.Element }>(null);

export const Tab: FC<TabProps> = ({
    data = [],
    contextPosition = 'start',
    direction = 'horizontal',
    size = 'md',
    activePosition = 'bottom',
    position = 'top',
    currentPage = 1,
    className,
    children,
    ...props
}) => {
    const [page, setPage] = useState<number>(currentPage - 1);

    const directionStyle = tabDirection[direction][contextPosition];
    const sizeStyle = tabSize[size];
    const activeStyle = ap[activePosition];
    const positionStyle = tp[position];

    const handleChangePage = (pg: number) => {
        setPage(pg);
    };

    return (
        <TabContext.Provider value={{ page: data[page].children }}>
            <div className={positionStyle}>
                <div className={cn(tabDefaultStyles, directionStyle, className)} {...props}>
                    {data.map((item, index) => (
                        <div
                            key={item.key}
                            className={cn(
                                tabItemDefaultStyles,
                                sizeStyle,
                                index === page && activeDefault,
                                index === page && activeStyle
                            )}
                            onClick={() => handleChangePage(index)}
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

export const TabHeader = () => {};

export const TabBody: FC<TabPageProps> = ({ className, children, ...props }) => {
    const { page } = useContext(TabContext);
    return (
        <div className={cn(tabPageDefaultStyles, className)} {...props}>
            {page}
        </div>
    );
};
