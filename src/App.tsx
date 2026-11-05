import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';

import Layout from './Layout';
import ButtonPage from './pages/ButtonPage.tsx';
import SpinnerPage from './pages/SpinnerPage.tsx';
import CollapsePage from './pages/CollapsePage.tsx';
import EmptyPage from './pages/EmptyPage';
import DrawerPage from '@/pages/DrawerPage.tsx';
import ModalPage from '@/pages/ModalPage.tsx';
import TabPage from '@/pages/TabPage.tsx';
import DropdownPage from '@/pages/DropdownPage.tsx';
import FormPage from "@/pages/FormPage.tsx";
// import NotificationPage from '@/pages/NotificationPage.tsx';

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
            // {
            //     path: 'notification',
            //     element: <NotificationPage />,
            // },
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
