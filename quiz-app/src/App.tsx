import { Footer } from 'components/Footer';
import Header from 'components/Header';
import React, { Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import router from 'routers/router';
// import { Counter } from './features/counter/Counter';

const showContentMenus = (routers: any) => {
  let result = [];
  if (routers.length > 0) {
    result = routers.map((route: any, index: number) => {
      return <Route key={index} path={route.path} element={route.main} />;
    });
  }
  return <Routes>{result}</Routes>;
};
function App() {
  return (
    <Fragment>
      {/* <Counter />  */}
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Header />
          <div style={{ marginTop: '4rem' }}>{showContentMenus(router)}</div>
        </Router>
        <Footer />
      </Suspense>
    </Fragment>
  );
}

export default App;
