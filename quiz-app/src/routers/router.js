import { UserPage } from 'features/UserPage'
import React from 'react';
const NotFound = React.lazy(() => import('components/NotFound'));
const Logout = React.lazy(() => import('components/Logout'));
const Login = React.lazy(() => import('features/Login'));

const router = [
    {
        path: '/',
        main: <UserPage />
    },
    {
        path: 'login',
        main: <Login />
    },
    {
        path: 'logout',
        main: <Logout />
    },
    // {
    //     path: '/dashboard/add',
    //     main: ({ history }) => <AddTask history={history} />
    // },
    // {
    //     path: '/dashboard/edit/:id',
    //     main: ({ match, history }) => <EditTask match={match} history={history} />
    // },
    // {
    //     path: '/schedule/add',
    //     main: ({ history }) => <AddSchedule history={history} />
    // },
    // {
    //     path: '/schedule/edit/:id',
    //     main: ({ match, history }) => <EditSchedule match={match} history={history} />
    // },
    {
        path: '*',
        main: <NotFound />
    }
]

export default router