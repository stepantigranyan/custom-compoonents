import { type FC, type Dispatch, type SetStateAction, useState, createContext } from 'react';

import type { TabItemProps, TabProps } from '@/ui/tab/types';

import { tabPosition as tp } from '@/ui/tab/styles';

export const TabContext = createContext<{
    data: TabItemProps[];
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}>(null);

export const Tab: FC<TabProps> = ({ data = [], position = 'top', currentPage = 1, className, children, ...props }) => {
    const [page, setPage] = useState<number>(currentPage - 1);

    const positionStyle = tp[position];

    return (
        <TabContext.Provider value={{ data, page, setPage }} {...props}>
            <div className={positionStyle}>{children}</div>
        </TabContext.Provider>
    );
};
