import { type FC, useState, createContext } from 'react';
import type { CollapseItemData, CollapseItemProps } from '@/ui/collapse/types';
import { collapseItemDefaultStyles } from '@/ui/collapse/styles';

import { cn } from '@/utils/cn';

export const CollapseItemContext = createContext<CollapseItemData | null>(null);

export const CollapseItem: FC<CollapseItemProps> = ({ children, open = false }) => {
    const [checked, setChecked] = useState<boolean>(open);
    const data: CollapseItemData = {
        isChecked: checked,
        changeChecked: setChecked,
    };

    return (
        <CollapseItemContext.Provider value={data}>
            <div className={cn(collapseItemDefaultStyles)}>{children}</div>
        </CollapseItemContext.Provider>
    );
};
