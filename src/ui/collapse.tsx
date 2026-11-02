import {
    type HTMLAttributes,
    type FC,
    type Dispatch,
    type SetStateAction,
    createContext,
    useContext,
    useState,
    useRef,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '../utils/cn';

import { ChevronRight } from 'lucide-react';

type collapse_variant = 'spoiler' | 'accordion';
type collapse_size = 'sm' | 'md' | 'lg';
type collapse_item_data = {
    isChecked: boolean;
    changeChecked: Dispatch<SetStateAction<boolean>>;
};

const collapseSize: Record<collapse_size, string> = {
    sm: 'text-sm px-3 py-2',
    md: 'text-md px-3 py-3',
    lg: 'text-lg px-3 py-4',
};

const CollapseContext = createContext<{
    variant: collapse_variant;
    size: collapse_size;
} | null>(null);
const CollapseItemContext = createContext<collapse_item_data | null>(null);

interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
    variant?: collapse_variant;
    size?: collapse_size;
}

interface CollapseItemProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
}

interface CollapseItemHeaderProps extends HTMLAttributes<HTMLDivElement> {}

interface CollapseItemBodyProps extends HTMLAttributes<HTMLDivElement> {}

const collapseDefaultStyles =
    'border border-solid border-gray-400 rounded-md flex flex-col overflow-hidden';
const collapseItemDefaultStyles =
    'not-last:border-b not-last:border-b-solid not-last:border-b-gray-400';
const collapseItemHeaderDefaultStyles =
    'bg-gray-200 flex items-center gap-x-1 shrink-0';
const collapseItemBodyDefaultStyles =
    'relative grid shrink-0 transition-[grid-template-rows] duration-355 ease-in-out';

const Collapse: FC<CollapseProps> = ({
    variant = 'spoiler',
    size = 'md',
    className,
    children,
    ...props
}) => {
    return (
        <CollapseContext.Provider value={{ variant, size }}>
            <div className={cn(collapseDefaultStyles, className)} {...props}>
                {children}
            </div>
        </CollapseContext.Provider>
    );
};

const CollapseItem: FC<CollapseItemProps> = ({ children, open = false }) => {
    const [checked, setChecked] = useState<boolean>(open);
    const data: collapse_item_data = {
        isChecked: checked,
        changeChecked: setChecked,
    };

    return (
        <CollapseItemContext.Provider value={data}>
            <div className={cn(collapseItemDefaultStyles)}>{children}</div>
        </CollapseItemContext.Provider>
    );
};

const CollapseItemHeader: FC<CollapseItemHeaderProps> = ({
    className,
    children,
    ...props
}) => {
    const { variant, size } = useContext(CollapseContext);
    const { isChecked, changeChecked } = useContext(CollapseItemContext);

    const id = useRef<string>(uuidv4());

    const sizeStyle = collapseSize[size];
    const rotateStyle = isChecked ? 'rotate-90' : 'rotate-0';

    return (
        <div
            className={cn(
                collapseItemHeaderDefaultStyles,
                sizeStyle,
                className
            )}
        >
            <label
                htmlFor={id.current}
                className={cn(
                    rotateStyle,
                    'cursor-pointer transition-all duration-200'
                )}
            >
                <span>
                    <ChevronRight size={20} />
                </span>
                <input
                    id={id.current}
                    type='checkbox'
                    className="hidden"
                    {...props}
                    onClick={() => changeChecked((prev) => !prev)}
                />
            </label>
            <h4>{children}</h4>
        </div>
    );
};

const CollapseItemBody: FC<CollapseItemBodyProps> = ({
    className,
    children,
    ...props
}) => {
    const { variant, size } = useContext(CollapseContext);
    const { isChecked } = useContext(CollapseItemContext);

    const sizeStyle = collapseSize[size];
    const showStyle = isChecked ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]';

    return (
        <div
            className={cn(collapseItemBodyDefaultStyles, showStyle, className)}
            {...props}
        >
            <div className="overflow-hidden">
                <div className={cn(sizeStyle)}>{children}</div>
            </div>
        </div>
    );
};

export { Collapse, CollapseItem, CollapseItemHeader, CollapseItemBody };
