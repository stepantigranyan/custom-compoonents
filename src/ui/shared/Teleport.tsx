import type { FC, JSX } from 'react';
import { createPortal } from 'react-dom';

interface TeleportProps {
    children: JSX.Element[] | JSX.Element;
    target: string;
}

export const Teleport: FC<TeleportProps> = ({ children, target }) => {
    const sidebarContentEl = document.getElementById(target)!;
    return createPortal(children, sidebarContentEl);
};
