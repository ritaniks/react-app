import React from 'react';
import { ReactComponent as LogoSite } from '../../../assets/img/nonprofit/svg/logo.svg';
import css from './Logo.module.scss';

const Logo = () => {
  return (
    <a href="/">
      <LogoSite className={css.logo} />
    </a>
  );
};

export default Logo;
