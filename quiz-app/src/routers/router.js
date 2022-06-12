import NotFound from 'components/NotFound'
import Home from 'features/Home'
import Login from 'features/Login'
import React from 'react'
// import Loading from '../components/LoadingHOC'
// const Schedule = Loading(React.lazy(() => import("../pages/Schedule")))
// const AddSchedule = Loading(React.lazy(() => import("../pages/Schedule/AddSchedule")))
// const EditSchedule = Loading(React.lazy(() => import("../pages/Schedule/EditSchedule")))
// const EditTask = Loading(React.lazy(() => import("../pages/Dashboard/EditTask")))
// const AddTask = Loading(React.lazy(() => import("../pages/Dashboard/AddTask")))
// const NotFound = Loading(React.lazy(() => import("../pages/NotFound")))
// const Login = Loading(React.lazy(() => import("../pages/Login")))
// const User = Loading(React.lazy(() => import("../pages/User")))
// const Dashboard = Loading(React.lazy(() => import("../pages/Dashboard")))

const router = [
    {
        path: 'home',
        main: <Home />
    },
    {
        path: '/',
        main: <Home />
    },
    // {
    //     path: '/user',
    //     main: () => <User />
    // },
    {
        path: 'login',
        main:  <Login />
    },
    // {
    //     path: '/schedule',
    //     main: () => <Schedule />
    // },
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