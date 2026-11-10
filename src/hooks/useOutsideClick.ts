import { type RefObject, useEffect } from 'react';

export const useOutsideClick = (ref: RefObject<HTMLDivElement | null>, cb: () => void) => {
    useEffect(() => {
        function handleClickOutside(event: Event): void {
            const target: HTMLDivElement = event.target as HTMLDivElement;
            if (ref!.current && !ref.current.contains(target)) {
                cb();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [cb, ref]);
};
