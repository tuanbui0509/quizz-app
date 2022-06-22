import { useAppSelector } from 'app/hooks';
import { Footer } from 'components/Footer';
import SideNavbar from 'components/SideNavbar';
import Login from 'features/Login';
import { Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Counter } from './features/counter/Counter';

function App() {
  const isLogin = useAppSelector((state) => state.login.value);
  console.log('====================================');
  console.log(isLogin);
  console.log('====================================');
  return (
    <Fragment>
      {/* <Counter />  */}
      <Suspense fallback={<div>Loading ...</div>}>
        {isLogin ? (
          <Router>
            <SideNavbar />
            <Footer />
          </Router>
        ) : (
          <Router>
            <Login />
          </Router>
        )}
      </Suspense>
    </Fragment>
  );
}

export default App;
