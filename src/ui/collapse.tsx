import {
    type HTMLAttributes,
    type FC,
    type JSX,
    type Dispatch,
    type SetStateAction,
    createContext,
    useContext,
    useState,
    useRef,
} from 'react';
import { ChevronRight } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '../utils/cn';

//============================================
// 1. Types and Interfaces
//============================================

type collapse_variant = 'spoiler' | 'accordion';
type collapse_size = 'sm' | 'md' | 'lg';
type collapse_item_data = {
    isChecked: boolean;
    changeChecked: Dispatch<SetStateAction<boolean>>;
};

interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
    variant?: collapse_variant;
    size?: collapse_size;
    icon?: JSX.Element;
}

interface CollapseItemProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
}

interface CollapseItemHeaderProps extends HTMLAttributes<HTMLDivElement> {}

interface CollapseItemBodyProps extends HTMLAttributes<HTMLDivElement> {}

//============================================
// 2. Style Mappings
//============================================

const collapseSize: Record<collapse_size, string> = {
    sm: 'text-sm px-3 py-2',
    md: 'text-md px-3 py-3',
    lg: 'text-lg px-3 py-4',
};

const collapseDefaultStyles = 'border border-solid border-gray-400 rounded-md flex flex-col overflow-hidden';
const collapseItemDefaultStyles = 'not-last:border-b not-last:border-b-solid not-last:border-b-gray-400';
const collapseItemHeaderDefaultStyles = 'bg-gray-200 flex items-center gap-x-1 shrink-0';
const collapseItemHeaderLabelDefaultStyles = 'cursor-pointer transition-all duration-200';
const collapseItemBodyDefaultStyles = 'relative grid shrink-0 transition-[grid-template-rows] duration-355 ease-in-out';

//============================================
// 3. Context
//============================================

const CollapseContext = createContext<CollapseProps | null>(null);
const CollapseItemContext = createContext<collapse_item_data | null>(null);

//============================================
// 4. Components
//============================================

const Collapse: FC<CollapseProps> = ({
    variant = 'spoiler',
    size = 'md',
    icon = <ChevronRight size={20} />,
    className,
    children,
    ...props
}) => {
    return (
        <CollapseContext.Provider value={{ variant, size, icon }}>
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

const CollapseItemHeader: FC<CollapseItemHeaderProps> = ({ className, children, ...props }) => {
    const id = useRef<string>(uuidv4());
    const { variant, size, icon } = useContext(CollapseContext);
    const { isChecked, changeChecked } = useContext(CollapseItemContext);

    const sizeStyle = collapseSize[size];
    const rotateStyle = isChecked ? 'rotate-90' : 'rotate-0';

    return (
        <div
            className={cn(collapseItemHeaderDefaultStyles, sizeStyle, className)}
            onClick={() => changeChecked((prev) => !prev)}
        >
            <input
                id={id.current}
                type="checkbox"
                className="hidden"
                onClick={(event) => event.stopPropagation()}
                {...props}
            />
            <label htmlFor={id.current} className={cn(collapseItemHeaderLabelDefaultStyles, rotateStyle)}>
                <span>{icon}</span>
            </label>
            <h4>{children}</h4>
        </div>
    );
};

const CollapseItemBody: FC<CollapseItemBodyProps> = ({ className, children, ...props }) => {
    const { variant, size } = useContext(CollapseContext);
    const { isChecked } = useContext(CollapseItemContext);

    const sizeStyle = collapseSize[size];
    const showStyle = isChecked ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]';

    return (
        <div className={cn(collapseItemBodyDefaultStyles, showStyle, className)} {...props}>
            <div className='overflow-hidden'>
                <div className={cn(sizeStyle)}>{children}</div>
            </div>
        </div>
    );
};

export { Collapse, CollapseItem, CollapseItemHeader, CollapseItemBody };
