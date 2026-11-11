import { type FC, useContext } from 'react';
import type { TabHeaderProps } from '@/ui/tab/types';

import {
    activeDefault,
    tabDefaultStyles,
    tabDirection,
    tabItemDefaultStyles,
    tabSize,
    activePosition as ap,
} from '@/ui/tab/styles';

import { TabContext } from '@/ui/tab/Tab';

import { cn } from '@/utils/cn';

export const TabHeader: FC<TabHeaderProps> = ({
    contextPosition = 'start',
    direction = 'horizontal',
    size = 'md',
    activePosition = 'bottom',
    className,
    ...props
}) => {
    const { data, activeTab, setActiveTab } = useContext(TabContext);

    const directionStyle = tabDirection[direction][contextPosition];
    const sizeStyle = tabSize[size];
    const activeStyle = ap[activePosition];

    return (
        <div className={cn(tabDefaultStyles, directionStyle, className)} {...props}>
            {data.map((item, index) => (
                <div
                    key={item.key}
                    className={cn(
                        tabItemDefaultStyles,
                        sizeStyle,
                        index === activeTab && activeDefault,
                        index === activeTab && activeStyle
                    )}
                    onClick={() => setActiveTab(index)}
                >
                    {item.icon}
                    {item.title}
                </div>
            ))}
        </div>
    );
};
