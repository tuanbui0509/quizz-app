import { useAppSelector } from 'app/hooks';
import { UserPage } from 'features/UserPage';
import { ShowRoutes } from 'helper/Func/ShowRoutes';
import { Fragment, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import router from 'routers/router';

function App() {
  const isLogin = useAppSelector((state) => state.login.value);
  return (
    <Fragment>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>{!isLogin ? ShowRoutes(router) : <UserPage />}</Router>
      </Suspense>
    </Fragment>
  );
}

export default App;
