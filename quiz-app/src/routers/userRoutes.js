import React from 'react';

export const NotFound = React.lazy(() => import('components/NotFound'));
export const Logout = React.lazy(() => import('components/Logout'));
export const Home = React.lazy(() => import('features/Home'));
export const QuestionManagement = React.lazy(() => import('features/QuestionManagement'));
export const userRoutes = [
  {
    path: '/',
    main: <Home />,
  },
  {
    path: 'home',
    main: <Home />,
  },
  {
    path: 'logout',
    main: <Logout />,
  },
  {
    path: 'question-management',
    main: <QuestionManagement />,
  },
  {
    path: '*',
    main: <NotFound />,
  },
];

export default userRoutes;
