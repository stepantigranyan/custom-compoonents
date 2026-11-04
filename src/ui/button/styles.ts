import type { btn_color, btn_rounded, btn_size, btn_variant } from '@/ui/button/types.ts';

export const btnRounded: Record<btn_rounded, string> = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
};

export const btnSize: Record<btn_size, string> = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-5 py-2 text-lg',
    xl: 'px-6 py-3 text-xl',
};

export const btnVariant: Record<btn_variant, Record<btn_color, string>> = {
    solid: {
        black: 'text-white  bg-black hover:bg-gray-800',
        gray: 'text-white bg-gray-600 hover:bg-gray-500',
        red: 'text-white bg-red-600 hover:bg-red-500',
        green: 'text-white bg-green-600 hover:bg-green-500',
        blue: 'text-white bg-blue-600 hover:bg-blue-500',
        yellow: 'text-white bg-yellow-600 hover:bg-yellow-500',
        pink: 'text-white bg-pink-600 hover:bg-pink-500',
        purple: 'text-white bg-purple-600 hover:bg-purple-500',
    },
    outline: {
        black: 'text-black bg-transparent border border-solid border-black hover:text-gray-800 hover:border-gray-800',
        gray: 'text-gray-600 bg-transparent border border-solid border-gray-600 hover:text-gray-400 hover:border-gray-400',
        red: 'text-red-600 bg-transparent border border-solid border-red-600 hover:text-red-400 hover:border-red-400',
        green: 'text-green-600 bg-transparent border border-solid border-green-600 hover:text-green-400 hover:border-green-400',
        blue: 'text-blue-600 bg-transparent border border-solid border-blue-600 hover:text-blue-400 hover:border-blue-400',
        yellow: 'text-yellow-600 bg-transparent border border-solid border-yellow-600 hover:text-yellow-400 hover:border-yellow-400',
        pink: 'text-pink-600 bg-transparent border border-solid border-pink-600 hover:text-pink-400 hover:border-pink-400',
        purple: 'text-purple-600 bg-transparent border border-solid border-purple-600 hover:text-purple-400 hover:border-purple-400',
    },
    ghost: {
        black: 'text-black bg-transparent hover:bg-gray-200',
        gray: 'text-gray-600 bg-transparent hover:bg-gray-100',
        red: 'text-red-600 bg-transparent hover:bg-red-100',
        green: 'text-green-600 bg-transparent hover:bg-green-100',
        blue: 'text-blue-600 bg-transparent hover:bg-blue-100',
        yellow: 'text-yellow-600 bg-transparent hover:bg-yellow-100',
        pink: 'text-pink-600 bg-transparent hover:bg-pink-100',
        purple: 'text-purple-600 bg-transparent hover:bg-purple-100',
    },
    filled: {
        black: 'text-black bg-gray-300 hover:bg-gray-400',
        gray: 'text-gray-600 bg-gray-200 hover:bg-gray-300',
        red: 'text-red-600 bg-red-200 hover:bg-red-300',
        green: 'text-green-600 bg-green-200 hover:bg-green-300',
        blue: 'text-blue-600 bg-blue-200 hover:bg-blue-300',
        yellow: 'text-yellow-600 bg-yellow-200 hover:bg-yellow-300',
        pink: 'text-pink-600 bg-pink-200 hover:bg-pink-300',
        purple: 'text-purple-600 bg-purple-200 hover:bg-purple-300',
    },
};

export const buttonDefaultStyles =
    'cursor-pointer inline-flex shrink-0 items-center justify-center gap-x-2 shadow-md transition-all duration-200 active:translate-y-0.5 disabled:cursor-not-allowed disabled:pointer-events-none disabled:text-gray-400 disabled:bg-gray-100 disabled:border-gray-400';
