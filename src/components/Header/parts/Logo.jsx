import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoSite } from '../../../assets/img/header/logo.svg';
import css from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={css.wrapLogo} role="banner">
      <NavLink to="/" exact>
        <LogoSite className={css.logo} />
      </NavLink>
    </div>
  );
};

export default Logo;
