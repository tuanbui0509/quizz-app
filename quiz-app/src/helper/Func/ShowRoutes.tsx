import { Route, Routes } from 'react-router-dom';

export const ShowRoutes = (routers: any) => {
  let result = [];
  if (routers.length > 0) {
    result = routers.map((route: any, index: number) => {
      return <Route key={index} path={route.path} element={route.main} />;
    });
  }
  return <Routes>{result}</Routes>;
};
