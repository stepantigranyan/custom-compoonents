// import {
//     type ButtonHTMLAttributes,
//     cloneElement,
//     type FC, type HTMLAttributes,
//     isValidElement,
//     type ReactElement,
//     useEffect,
//     useState
// } from 'react';
//
// import type { NotificationGroupProps, NotificationProps } from './types';
// import {
//     notificationDefaultStyles,
//     notificationGroupDefaultStyles,
//     notificationPosition,
//     notificationAnimations,
// } from '@/ui/notification/styles.ts';
//
// import { Teleport } from '@/ui/shared/Teleport.tsx';
//
// import { v4 as uuidv4 } from 'uuid';
// import { cn } from '@/utils/cn';
//
// const NotificationGroup: FC<NotificationGroupProps> = ({
//     notifications,
//     position = 'topRight',
//     trigger,
//     className,
//     ...props
// }) => {
//     const [visible, setVisible] = useState<boolean>(false);
//     const [open, setOpen] = useState<boolean>(false);
//
//     useEffect(() => {
//         if (open) {
//             setVisible(true);
//         }
//     }, [open]);
//
//     let animationMode = '';
//
//     if (position.toLowerCase().includes('left')) {
//         animationMode = 'left';
//     } else if (position.toLowerCase().includes('right')) {
//         animationMode = 'right';
//     } else if (position.toLowerCase().includes('top')) {
//         animationMode = 'top';
//     } else {
//         animationMode = 'bottom';
//     }
//
//     const positionStyle = notificationPosition[position];
//     const openAnimation = notificationAnimations[animationMode].open;
//     const closeAnimation = notificationAnimations[animationMode].close;
//
//     const toggle = () => {
//         setOpen(true);
//         setTimeout(() => {
//             setOpen(false);
//         }, 2000);
//     };
//
//     const handleAnimationEnd = () => {
//         if (!open) {
//             setVisible(false);
//         }
//     };
//
//     const renderedTrigger =
//         trigger && isValidElement(trigger)
//             ? cloneElement(trigger as ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>, {
//                 onClick: (e) => {
//                     const originalOnClick = (trigger.props as HTMLAttributes<HTMLButtonElement>).onClick;
//                     if (originalOnClick) {
//                         originalOnClick(e);
//                     }
//
//                     toggle();
//                 },
//             })
//             : null;
//
//     return (
//         <>
//             {visible && (
//                 <Teleport target={'notification-root'}>
//                     <div className={cn(notificationGroupDefaultStyles, className)}>
//                         <div
//                             className={cn(
//                                 notificationDefaultStyles,
//                                 positionStyle,
//                                 open ? openAnimation : closeAnimation
//                             )}
//                             onAnimationEnd={handleAnimationEnd}
//                         >
//                             { notifications[0].title }
//                         </div>
//                     </div>
//                 </Teleport>
//             )}
//
//             {
//                 renderedTrigger
//             }
//         </>
//     );
// };
//
// export { NotificationGroup, type NotificationProps };
