import type { ButtonHTMLAttributes, JSX } from 'react';

export type btn_size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type btn_rounded = 'sm' | 'md' | 'lg' | 'full';
export type btn_variant = 'solid' | 'outline' | 'ghost' | 'filled';
export type btn_color = 'black' | 'gray' | 'red' | 'green' | 'blue' | 'yellow' | 'pink' | 'purple';
export type btn_icon_placement = 'right' | 'left';

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: btn_variant;
    color?: btn_color;
    size?: btn_size;
    rounded?: btn_rounded;
    icon?: JSX.Element;
    iconPlacement?: btn_icon_placement;
}
