import React from 'react';
import { ReactComponent as LogoSite } from '../../../assets/img/header/logo.svg';
import css from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={css.wrapLogo} role="banner">
      <LogoSite className={css.logo} />
    </div>
  );
};

export default Logo;
