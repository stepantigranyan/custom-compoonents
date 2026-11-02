import { type HTMLAttributes, type FC } from 'react';
import { cn } from '../utils/cn';

//============================================
// 1. Types and Interfaces
//============================================

type spin_size = 'sm' | 'md' | 'lg';
type spin_speed = 'slow' | 'medium' | 'fast';
type spin_variant = 'segment' | 'arc' | 'dashed';
type spin_color = 'black' | 'gray' | 'red' | 'green' | 'blue' | 'yellow' | 'pink' | 'purple';

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    size?: spin_size;
    variant?: spin_variant;
    speed?: spin_speed;
    color?: spin_color;
}

//============================================
// 2. Style Mappings
//============================================

const spinSize: Record<spin_size, string> = {
    sm: 'size-6 border',
    md: 'size-8 border-2',
    lg: 'size-10 border-2',
};

const spinSpeed: Record<spin_speed, string> = {
    slow: '[animation-duration:1s]',
    medium: '[animation-duration:0.8s]',
    fast: '[animation-duration:0.6s]',
};

const spinVariant: Record<spin_variant, string> = {
    segment: 'border-solid border-t-transparent',
    arc: 'border-solid border-transparent border-t-inherit',
    dashed: 'border-dashed',
};

const spinColor: Record<spin_color, string> = {
    black: 'border-black',
    gray: 'border-gray-800',
    red: 'border-red-600',
    green: 'border-green-600',
    blue: 'border-blue-600',
    yellow: 'border-yellow-600',
    pink: 'border-pink-600',
    purple: 'border-purple-600',
};

const spinnerDefaultStyles = 'rounded-full transition-all animate-spin';

//============================================
// 3. Component
//============================================

const Spinner: FC<SpinnerProps> = ({
    size = 'md',
    speed = 'medium',
    variant = 'segment',
    color,
    className,
    ...props
}) => {
    const spinnerSize = spinSize[size];
    const spinnerSpeed = spinSpeed[speed];
    const spinnerVariant = spinVariant[variant];
    const spinnerColor = spinColor[color];

    return (
        <div
            className={cn(spinnerColor, spinnerDefaultStyles, spinnerVariant, spinnerSpeed, spinnerSize, className)}
            {...props}
        />
    );
};

export { Spinner };
