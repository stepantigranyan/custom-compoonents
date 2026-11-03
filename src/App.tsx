import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';

import Layout from './Layout';
import ButtonPage from './pages/ButtonPage.tsx';
import SpinnerPage from './pages/SpinnerPage.tsx';
import CollapsePage from './pages/CollapsePage.tsx';
import EmptyPage from './pages/EmptyPage';
import DrawerPage from "@/pages/DrawerPage.tsx";
// import NotificationPage from './pages/NotificationPage';
// import DropdownPage from './pages/DropdownPage.tsx';

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
            // {
            //     path: 'notification',
            //     element: <NotificationPage />,
            // },
            // {
            //     path: 'dropdown',
            //     element: <DropdownPage />,
            // },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
