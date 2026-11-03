import { type ImgHTMLAttributes, type HTMLAttributes, type FC } from 'react';
import { cn } from '@/utils/cn';

//============================================
// 1. Types and Interfaces
//============================================

type empty_size = 'sm' | 'md' | 'lg';
type empty_img = 'default' | 'notFound';

interface EmptyProps extends HTMLAttributes<HTMLDivElement> {}

interface EmptyImgProps extends ImgHTMLAttributes<HTMLImageElement> {
    size?: empty_size;
    variant?: empty_img;
}

interface EmptyBodyProps extends HTMLAttributes<HTMLDivElement> {
    size?: empty_size;
}

interface EmptyTitleProps extends HTMLAttributes<HTMLDivElement> {
    size?: empty_size;
}

interface EmptyDescriptionProps extends HTMLAttributes<HTMLDivElement> {
    size?: empty_size;
}

//============================================
// 2. Style Mappings
//============================================

const emptyImgSize: Record<empty_size, string> = {
    sm: 'size-20',
    md: 'size-40',
    lg: 'size-60',
};

const emptyImg: Record<empty_img, string> = {
    default:
        'https://cdni.iconscout.com/illustration/premium/thumb/data-not-found-illustration-svg-download-png-9404367.png',
    notFound:
        'https://png.pngtree.com/png-vector/20260425/ourmid/pngtree-cute-robot-character-displaying-404-page-not-found-error-png-image_19174372.webp',
};

const emptyTitleSize: Record<empty_size, string> = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
};

const emptyDescriptionSize: Record<empty_size, string> = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-md',
};

const emptyDefaultStyles = 'p-3 w-full h-full flex items-center justify-center';
const emptyBodyDefaultStyles = 'p-1 flex flex-col items-center justify-center';
const emptyTitleDefaultStyles = 'font-bold flex items-center gap-x-2 shrink-0 text-gray-600';
const emptyDescriptionDefaultStyles = 'flex items-center gap-x-1 shrink-0 text-gray-500';

//============================================
// 3. Components
//============================================

const Empty: FC<EmptyProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(emptyDefaultStyles, className)} {...props}>
            {children}
        </div>
    );
};

const EmptyImg: FC<EmptyImgProps> = ({ size = 'md', variant = 'default', className, ...props }) => {
    const sizeStyle = emptyImgSize[size];
    const imgVariant = emptyImg[variant];

    return <img src={imgVariant} alt="No data" className={cn(sizeStyle, className)} {...props} />;
};

const EmptyBody: FC<EmptyBodyProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(emptyBodyDefaultStyles, className)} {...props}>
            {children}
        </div>
    );
};

const EmptyTitle: FC<EmptyTitleProps> = ({ size = 'md', className, children, ...props }) => {
    const sizeStyle = emptyTitleSize[size];
    return (
        <div className={cn(emptyTitleDefaultStyles, sizeStyle, className)} {...props}>
            {children}
        </div>
    );
};

const EmptyDescription: FC<EmptyDescriptionProps> = ({ size = 'md', className, children, ...props }) => {
    const sizeStyle = emptyDescriptionSize[size];
    return (
        <div className={cn(emptyDescriptionDefaultStyles, sizeStyle, className)} {...props}>
            {children}
        </div>
    );
};

export { Empty, EmptyBody, EmptyImg, EmptyTitle, EmptyDescription };
