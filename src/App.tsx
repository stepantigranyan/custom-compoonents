import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';

import Layout from './Layout';
import ButtonPage from './pages/ButtonPage';
import SpinnerPage from './pages/SpinnerPage';
import CollapsePage from './pages/CollapsePage';
import EmptyPage from './pages/EmptyPage';
import DrawerPage from '@/pages/DrawerPage';
import ModalPage from '@/pages/ModalPage';
import TabPage from '@/pages/TabPage';
import DropdownPage from '@/pages/DropdownPage';
import FormPage from '@/pages/FormPage';
import NotificationPage from '@/pages/NotificationPage';
import { NotificationProvider } from '@/ui/notification/NotificationProvider';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="/button" replace={true} />,
            },
            {
                path: 'button',
                element: <ButtonPage />,
            },
            {
                path: 'spinner',
                element: <SpinnerPage />,
            },
            {
                path: 'collapse',
                element: <CollapsePage />,
            },
            {
                path: 'empty',
                element: <EmptyPage />,
            },
            {
                path: 'drawer',
                element: <DrawerPage />,
            },
            {
                path: 'modal',
                element: <ModalPage />,
            },
            {
                path: 'tab',
                element: <TabPage />,
            },
            {
                path: 'notification',
                element: (
                    <NotificationProvider>
                        <NotificationPage />
                    </NotificationProvider>
                ),
            },
            {
                path: 'dropdown',
                element: <DropdownPage />,
            },
            {
                path: 'form',
                element: <FormPage />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
