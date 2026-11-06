import type { HTMLAttributes } from 'react';

export type spin_size = 'sm' | 'md' | 'lg';
export type spin_speed = 'slow' | 'medium' | 'fast';
export type spin_variant = 'segment' | 'arc' | 'dashed';
export type spin_color = 'black' | 'gray' | 'red' | 'green' | 'blue' | 'yellow' | 'pink' | 'purple';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    size?: spin_size;
    speed?: spin_speed;
    variant?: spin_variant;
    color?: spin_color;
}
