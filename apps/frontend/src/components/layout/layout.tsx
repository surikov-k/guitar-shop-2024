import { Fragment } from 'react';
import { Header, Footer } from '../../components';
import { Outlet } from 'react-router-dom';

export function Layout(): JSX.Element {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
}
