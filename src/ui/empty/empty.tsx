import type { FC } from 'react';

import type {
    EmptyBodyProps,
    EmptyDescriptionProps,
    EmptyImgProps,
    EmptyProps,
    EmptyTitleProps,
} from '@/ui/empty/types.ts';

import {
    emptyBodyDefaultStyles,
    emptyDefaultStyles,
    emptyDescriptionDefaultStyles,
    emptyDescriptionSize,
    emptyImg,
    emptyImgSize,
    emptyTitleDefaultStyles,
    emptyTitleSize,
} from '@/ui/empty/styles.ts';

import { cn } from '@/utils/cn';

export const Empty: FC<EmptyProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(emptyDefaultStyles, className)} {...props}>
            {children}
        </div>
    );
};

export const EmptyImg: FC<EmptyImgProps> = ({ size = 'md', variant = 'default', className, ...props }) => {
    const sizeStyle = emptyImgSize[size];
    const imgVariant = emptyImg[variant];

    return <img src={imgVariant} alt="No data" className={cn(sizeStyle, className)} {...props} />;
};

export const EmptyBody: FC<EmptyBodyProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(emptyBodyDefaultStyles, className)} {...props}>
            {children}
        </div>
    );
};

export const EmptyTitle: FC<EmptyTitleProps> = ({ size = 'md', className, children, ...props }) => {
    const sizeStyle = emptyTitleSize[size];
    return (
        <div className={cn(emptyTitleDefaultStyles, sizeStyle, className)} {...props}>
            {children}
        </div>
    );
};

export const EmptyDescription: FC<EmptyDescriptionProps> = ({ size = 'md', className, children, ...props }) => {
    const sizeStyle = emptyDescriptionSize[size];
    return (
        <div className={cn(emptyDescriptionDefaultStyles, sizeStyle, className)} {...props}>
            {children}
        </div>
    );
};
