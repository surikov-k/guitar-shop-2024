import cn from 'classnames';

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppRoute } from '../../../constants';

type LogoProps = {
  inFooter?: boolean,
};

export function LogoLink({ inFooter = false }: LogoProps): JSX.Element {
  const [isRoot, setIsRoot] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    setIsRoot(location.pathname === AppRoute.Root)
  }, [location.pathname])

  const logoType = inFooter ? 'footer' : 'header';
  const logoStyle = cn({
    [`${logoType}__logo`]: true,
  }, 'logo');


  return (
    <Link
      style={{ pointerEvents: isRoot ? 'none' : 'auto' }}
      className={logoStyle}
      to="/">
      <img
        className="logo__img"
        src="/img/svg/logo.svg"
        width="70"
        height="70"
        alt="Логотип"
      />
    </Link>)
}
