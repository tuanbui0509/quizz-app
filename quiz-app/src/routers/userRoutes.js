import React from 'react';

const NotFound = React.lazy(() => import('components/NotFound'));
const Logout = React.lazy(() => import('components/Logout'));
const Home = React.lazy(() => import('features/Home'));
const userRoutes = [
    {
        path: '/',
        main: <Home />
    },
    {
        path: 'home',
        main: <Home />
    },
    {
        path: 'logout',
        main:  <Logout />
    },
    {
        path: '*',
        main: <NotFound />
    }
]

export default userRoutes