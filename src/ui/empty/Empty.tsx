import type { FC } from 'react';

import type { EmptyProps } from '@/ui/empty/types';

import {
    emptyBodyDefaultStyles,
    emptyDefaultStyles,
    emptyDescriptionDefaultStyles,
    emptyImg,
    emptyImgSize,
    emptyTitleDefaultStyles,
} from '@/ui/empty/styles';

import { cn } from '@/utils/cn';

export const Empty: FC<EmptyProps> = ({
    imgSize = 'md',
    imgVariant,
    title = 'No Data',
    description,
    className,
    children,
    ...props
}) => {
    const sizeStyle = emptyImgSize[imgSize];
    const variantStyle = emptyImg[imgVariant];

    return (
        <div className={cn(emptyDefaultStyles, className)} {...props}>
            {variantStyle && <img src={variantStyle} alt="No data" className={cn(sizeStyle, className)} {...props} />}
            <div className={cn(emptyBodyDefaultStyles)} {...props}>
                <div className={cn(emptyTitleDefaultStyles)}>{title}</div>
                {description && <div className={cn(emptyDescriptionDefaultStyles)}>{description}</div>}
                {children && <div className="flex items-center gap-y-1 mt-4">{children}</div>}
            </div>
        </div>
    );
};
