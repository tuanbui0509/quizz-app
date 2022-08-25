import React from 'react';
import UserPage from 'features/UserPage';
export const NotFound = React.lazy(() => import('components/NotFound'));
export const Logout = React.lazy(() => import('components/Logout'));
export const Login = React.lazy(() => import('features/Login'));

const router = [
  {
    path: '/',
    main: <UserPage />,
  },
  {
    path: 'login',
    main: <Login />,
  },
  {
    path: 'logout',
    main: <Logout />,
  },
  {
    path: '*',
    main: <NotFound />,
  },
];

export default router;
