// import {type HTMLAttributes, type FC, type JSX, type ReactNode} from 'react';
// import { cn } from '../utils/cn';
//
// type dd_menu_placement =
//     | 'top'
//     | 'topLeft'
//     | 'topRight'
//     | 'bottomLeft'
//     | 'bottom'
//     | 'bottomRight'
//     | 'leftTop'
//     | 'left'
//     | 'leftBottom'
//     | 'rightTop'
//     | 'right'
//     | 'rightBottom';
// type dd_menu_trigger = 'click' | 'hover';
//
// type dd_item_icon_placement = 'left' | 'right';
// type dd_item_model = 'default' | 'danger' | 'warning' | 'disabled';
//
// const ddItemModel: Record<dd_item_model, string> = {
//     default: 'cursor-pointer bg-transparent hover:hover:bg-gray-200',
//     danger: 'cursor-pointer text-red-600 bg-transparent hover:text-white hover:bg-red-600',
//     warning: 'cursor-pointer text-yellow-600 bg-transparent hover:text-white hover:bg-yellow-600',
//     disabled: 'cursor-not-allowed pointer-events-none text-gray-400 bg-gray-100 border-gray-400'
// };
//
// const ddMenuPlacement: Record<dd_menu_placement, string> = {
//     topLeft: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pb-2 bottom-full left-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible',
//     top: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pb-2 bottom-full left-1/2 -translate-x-1/2 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible',
//     topRight: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pb-2 bottom-full right-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible',
//     bottomLeft: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pt-2 top-full left-0 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible',
//     bottom: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pt-2 top-full left-1/2 -translate-x-1/2 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible',
//     bottomRight: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pt-2 top-full right-0 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible',
//     leftTop: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pr-2 right-full bottom-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible',
//     left: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pr-2 right-full top-1/2 -translate-y-1/2 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible',
//     leftBottom: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pr-2 right-full top-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible',
//     rightTop: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pl-2 left-full bottom-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible',
//     right: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pl-2 left-full top-1/2 -translate-y-1/2 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible',
//     rightBottom: 'absolute flex flex-col gap-y-1 opacity-0 invisible bg-transparent z-100 transition-all duration-200 ease-out pl-2 left-full top-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible',
// };
//
// interface DropDownProps extends HTMLAttributes<HTMLUListElement> {
//     menu: DropdownItemProps[];
//     placement?: dd_menu_placement;
//     trigger?: dd_menu_trigger;
//     open?: boolean;
//     onOpenChange?: (isOpen: boolean) => void;
// }
//
// interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {
//     key: string;
//     label: ReactNode | JSX.Element;
//     icon?: JSX.Element;
//     iconPlacement?: dd_item_icon_placement;
//     model?: dd_item_model;
//     menu?: DropDownProps | null;
// }
//
//
// const dropdownItemDefaultStyles =
//     'px-2 py-1 inline-flex shrink-0 items-center justify-center px-2 py-1 rounded-md transition-all duration-200';
// const dropdownDefaultStyles = 'flex flex-col gap-y-1 bg-white w-max shadow-md rounded-md p-1';

// const DropdownItem: FC<DropdownItemProps> = ({
//     label,
//     icon,
//     iconPlacement = 'left',
//     model = 'default',
//     className,
//     ...props
// }) => {
//     const dropdownItemModel = ddItemModel[model];
//
//     return (
//         <li
//             className={cn(
//                 dropdownItemDefaultStyles,
//                 dropdownItemModel,
//                 className
//             )}
//             {...props}
//         >
//             {iconPlacement === 'left' && icon}
//             {label}
//             {iconPlacement === 'right' && icon}
//         </li>
//     );
// };

// const Dropdown: FC<DropDownProps> = ({
//     menu,
//     placement = 'bottom',
//     trigger = 'hover',
//     open = false,
//     onOpenChange = (arg: boolean) => !arg,
//     className,
//     children,
//     ...props
// }) => {
//     const dropdownPlacement = ddMenuPlacement[placement];
//
//     return (
//         <>
//             <div className="group relative inline-flex items-center justify-center gap-x-2">
//                 {children}
//                 <div className={cn(dropdownDefaultPosition, dropdownPlacement)}>
//                     <ul
//                         className={cn(dropdownDefaultStyles, className)}
//                         {...props}
//                     >
//                         {menu.map((item) => (
//                             <DropdownItem key={item.key} label={item.label} model={item.model} />
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// };
//
// export { Dropdown };
