import { type FC, type Dispatch, type SetStateAction, useState, createContext } from 'react';

import type { TabItemProps, TabProps } from '@/ui/tab/types';

import { tabPosition as tp } from '@/ui/tab/styles';

export const TabContext = createContext<{
    data: TabItemProps[];
    activeTab: number;
    setActiveTab: Dispatch<SetStateAction<number>>;
}>(null);

export const Tab: FC<TabProps> = ({
    data = [],
    position = 'top',
    defaultActiveTab = 0,
    className,
    children,
    ...props
}) => {
    const [activeTab, setActiveTab] = useState<number>(defaultActiveTab);

    const positionStyle = tp[position];

    return (
        <TabContext.Provider value={{ data, activeTab, setActiveTab }} {...props}>
            <div className={positionStyle}>{children}</div>
        </TabContext.Provider>
    );
};
