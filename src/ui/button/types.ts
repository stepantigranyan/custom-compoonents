import type { ButtonHTMLAttributes, JSX } from 'react';

export type BtnVariant = 'solid' | 'outline' | 'ghost' | 'filled';
export type BtnColor = 'black' | 'gray' | 'red' | 'green' | 'blue' | 'yellow' | 'pink' | 'purple';
export type BtnSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BtnRounded = 'sm' | 'md' | 'lg' | 'full';
export type BtnIconPlacement = 'right' | 'left';

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: BtnVariant;
    color?: BtnColor;
    size?: BtnSize;
    rounded?: BtnRounded;
    iconPlacement?: BtnIconPlacement;
    icon?: JSX.Element;
}
