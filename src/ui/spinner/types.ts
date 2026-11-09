import type { HTMLAttributes } from 'react';

export type SpinSize = 'sm' | 'md' | 'lg';
export type SpinSpeed = 'slow' | 'medium' | 'fast';
export type SpinVariant = 'segment' | 'arc' | 'dashed';
export type SpinColor = 'black' | 'gray' | 'red' | 'green' | 'blue' | 'yellow' | 'pink' | 'purple';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    size?: SpinSize;
    speed?: SpinSpeed;
    variant?: SpinVariant;
    color?: SpinColor;
}
