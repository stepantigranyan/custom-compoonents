// import {type CSSProperties, type FC, type HTMLAttributes, type JSX} from "react";
// import {v4 as uuidv4} from 'uuid';
// import {cn} from '@/utils/cn';
//
// type notification_position = 'topLeft' | 'top' | 'topRight' | 'bottomLeft' | 'bottom' | 'bottomRight';
//
//
// interface NotificationGroupProps extends HTMLAttributes<HTMLDivElement> {
//     position?: notification_position;
//     notifications?: NotificationData[];
//     render?: JSX.Element;
// }
//
// interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
//     title?: string;
//     description?: string;
//     actions?: HTMLButtonElement[];
//     isFirst?: boolean;
// }
//
// interface NotificationData {
//     title?: string;
//     description?: string;
//     actions?: HTMLButtonElement[];
// }
//
// const notificationPosition: Record<notification_position, string> = {
//     topLeft: 'left-5 top-5 flex-col',
//     top: 'left-1/2 top-5 -translate-x-1/2 flex-col',
//     topRight: 'right-5 top-5 flex-col',
//     bottomLeft: 'left-5 bottom-5 flex-col-reverse',
//     bottom: 'left-1/2 bottom-5 -translate-x-1/2 flex-col-reverse',
//     bottomRight: 'right-5 bottom-5 flex-col-reverse',
// }
//
// const notificationGroupDefaultStyles = 'fixed max-h-screen';
// const notificationDefaultStyles = 'absolute p-2 min-w-100 min-h-20 flex items-center justify-center rounded-md bg-gray-200 shadow-lg z-50 transition-all duration-200 delay-200 animate-[removeNotification_0.2s_ease_2s]';
//
// const Notification: FC<NotificationProps> = ({ title, description, actions, isFirst, className, children, ...props}) => {
//     const addingAnimation = isFirst ?  '' : '';
//     return (
//         <div className={cn(notificationDefaultStyles, addingAnimation, className)} {...props}>
//             {title && <h4>{title}</h4>}
//             {description && <p>{description}</p>}
//             {actions && <div>{actions}</div>}
//         </div>
//     )
// };
//
// const NotificationGroup: FC<NotificationGroupProps> = ({ notifications = [], position = 'topRight', render, className, ...props }) => {
//     const placement = position.includes('top') ? 'top' : 'bottom';
//     const positionStyle = notificationPosition[position];
//
//     return (
//         <>
//             <div
//                 className={cn(notificationGroupDefaultStyles, positionStyle, className)} {...props}
//             >
//                 <div className='size-full group'>
//                     {
//                         notifications.length !== 0 && notifications.map((x, i) => {
//                             const index = placement === 'top' ? notifications.length - i - 1 : i;
//                             const stackStyles: CSSProperties = {[placement]: `${(20 + index * 5) + 'px'}`, '--moving': `calc(100% * ${index} + ${index * 5}px)`};
//
//                             return <Notification
//                                 isFirst={!index}
//                                 key={uuidv4()}
//                                 title={x.title}
//                                 description={x.description}
//                                 actions={x.actions}
//                                 style={stackStyles}
//                                 className='group-hover:translate-y-(--moving)'
//                             />
//                         })
//                     }
//                 </div>
//             </div>
//
//             {
//                 render
//             }
//
//         </>
//     );
// };
//
//
// export { NotificationGroup, Notification, type NotificationProps };
