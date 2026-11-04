import type { spin_color, spin_size, spin_speed, spin_variant } from '@/ui/spinner/types.ts';

export const spinSize: Record<spin_size, string> = {
    sm: 'size-6 border',
    md: 'size-8 border-2',
    lg: 'size-10 border-2',
};

export const spinSpeed: Record<spin_speed, string> = {
    slow: '[animation-duration:1s]',
    medium: '[animation-duration:0.8s]',
    fast: '[animation-duration:0.6s]',
};

export const spinVariant: Record<spin_variant, string> = {
    segment: 'border-solid border-t-transparent',
    arc: 'border-solid border-transparent border-t-inherit',
    dashed: 'border-dashed',
};

export const spinColor: Record<spin_color, string> = {
    black: 'border-black',
    gray: 'border-gray-800',
    red: 'border-red-600',
    green: 'border-green-600',
    blue: 'border-blue-600',
    yellow: 'border-yellow-600',
    pink: 'border-pink-600',
    purple: 'border-purple-600',
};

export const spinnerDefaultStyles = 'rounded-full transition-all animate-spin';
