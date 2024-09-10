import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../../constants';

import { LogoLink } from '../logo-link';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { dropToken } from '../../services';
import { requireAuthorization, saveUser } from '../../store/actions';

export function Header(): JSX.Element {
  const { authStatus, user } = useAppSelector((state) => ({
    authStatus: state.authStatus,
    user: state.user
  }));
  const dispatch = useAppDispatch();

  return (
    <header
      className={cn('header', {
        'header--logged': authStatus === AuthStatus.Auth
      })}
      id="header"
    >
      <div className="container">
        <div className="header__wrapper">
          <LogoLink />
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <a className="link main-nav__link"
                   href="#">Каталог</a>
              </li>
              {authStatus !== AuthStatus.Auth && (
                <>
                  <li className="main-nav__item">
                    <Link
                      className="link main-nav__link"
                      to={AppRoute.Root}>
                      Где купить?
                    </Link>
                  </li>
                  <li className="main-nav__item">
                    <Link
                      className="link main-nav__link"
                      to={AppRoute.Root}>
                      О компании
                    </Link>
                  </li>
                </>
              )}

              {authStatus === AuthStatus.Auth && (
                <li className="main-nav__item">
                  <Link
                    className="link main-nav__link"
                    to={AppRoute.Root}>
                    Список товаров
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="header__container">
                  <span
                    title="Выйти"
                    className="header__user-name"
                    style={{ marginRight: '6px' }}
                  >{`${user?.name}`}</span>
            <Link
              className="header__link"
              onClick={(e) => {
                if (authStatus === AuthStatus.Auth) {
                  e.preventDefault();
                  dropToken();
                  dispatch(requireAuthorization(AuthStatus.NoAuth));
                  dispatch(saveUser(null));
                }
              }}
              to={AppRoute.Login}
              aria-label="Перейти в личный кабинет"
            >
              <svg
                className="header__link-icon"
                width="12"
                height="14"
                aria-hidden="true"
              >
                <use xlinkHref="#icon-account"></use>
              </svg>
              <span className="header__link-text">Вход</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );

  // return (
  //   <header
  //     className={cn('header', {
  //       'header--logged': authStatus === AuthStatus.Auth
  //     })}
  //     id="header"
  //   >
  //     <div className="container">
  //       <div className="header__wrapper">
  //         <LogoLink/>
  //         <nav className="main-nav">
  //           <ul className="main-nav__list">
  //             <li className="main-nav__item">
  //               <Link
  //                 className="link main-nav__link link--current"
  //                 to={AppRoute.Root}
  //               >
  //                 Каталог
  //               </Link>
  //             </li>
  //             {authStatus === AuthStatus.Auth && (
  //               <>
  //                 <li className="main-nav__item">
  //                   <Link
  //                     className="link main-nav__link"
  //                     to={AppRoute.Root}>
  //                     Где купить?
  //                   </Link>
  //                 </li>
  //                 <li className="main-nav__item">
  //                   <Link
  //                     className="link main-nav__link"
  //                     to={AppRoute.Root}>
  //                     О компании
  //                   </Link>
  //                 </li>
  //               </>
  //             )}
  //           </ul>
  //         </nav>
  //         <div className="header__container">
  //           <span
  //             title="Выйти"
  //             className="header__user-name"
  //             style={{ marginRight: '6px' }}
  //           >{`${user?.name}`}</span>
  //           <Link
  //             className="header__link"
  //             onClick={(e) => {
  //               if (authStatus === AuthStatus.Auth) {
  //                 e.preventDefault();
  //                 dropToken();
  //                 dispatch(requireAuthorization(AuthStatus.NoAuth))
  //                 dispatch(saveUser(null));
  //               }
  //             }}
  //             to={AppRoute.Login}
  //             aria-label="Перейти в личный кабинет"
  //           >
  //             <svg
  //               className="header__link-icon"
  //               width="12"
  //               height="14"
  //               aria-hidden="true"
  //             >
  //               <use xlinkHref="#icon-account"></use>
  //             </svg>
  //             <span className="header__link-text">Вход</span>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </header>
  // );
}
