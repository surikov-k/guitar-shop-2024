import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoute } from '../../constants';
import { AuthRoute } from '../auth-route';
import { Layout } from '../components';
import { useAppSelector } from '../hooks';
import { Main, Registration } from '../pages';
import { Login } from '../pages';

export function App() {
  const { authStatus } = useAppSelector((state) => state)
  return (
    <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout/>}>
            <Route
              index
              element={<Login/>}/>
            <Route
              path={AppRoute.Registration}
              element={<Registration/>}/>
            <Route
              path={AppRoute.ItemsList}
              element={
              <AuthRoute authStatus={authStatus}>
                <Main/>
              </AuthRoute>
              }/>
            {/*<Route*/}
            {/*  path={AppRoute.Item}*/}
            {/*  element={<ShopItem/>}/>*/}
            {/*<Route*/}
            {/*  path="*"*/}
            {/*  element={<NotFound/>}/>*/}
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
