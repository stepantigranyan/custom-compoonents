import type { FC } from 'react';
import type { SpinnerProps } from '@/ui/spinner/types.ts';
import { spinColor, spinnerDefaultStyles, spinSize, spinSpeed, spinVariant } from '@/ui/spinner/styles.ts';

import { cn } from '@/utils/cn';

export const Spinner: FC<SpinnerProps> = ({
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
