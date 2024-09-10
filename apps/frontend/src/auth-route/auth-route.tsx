import { AppRoute, AuthStatus } from '../../constants';
import { Navigate } from 'react-router-dom';

type AuthRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

export function AuthRoute({ authStatus, children }: AuthRouteProps): JSX.Element {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Root}/>
  );
}

