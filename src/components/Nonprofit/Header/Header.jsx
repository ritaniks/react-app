import React from 'react';

import Logo from '../../Header/parts/Logo';
import useWindowSize from '../../hooks/useWindowSize';

import css from './Header.module.scss';

const Header = () => {
  const size = useWindowSize();
  return (
    <header className={'container'}>
      <nav className="navbar bg-primary px-3 px-md-4 shadow-sm fixed-top">
        <div className="navbar-brand mr-auto" href="#">
          <Logo />
        </div>
        <button
          type="button"
          className={`btn btn-outline-light mr-sm-3 ${
            size.width < 768 ? 'd-none' : 'd-block'
          }`}
        >
          <a
            className={css.demo}
            href="https://www.timeledger.com/time-tracking-tool-demo#demo-form"
          >
            Schedule a demo
          </a>
        </button>
        <button type="button" className={`btn btn-warning `}>
          <a href="https://www.timeledger.com/free-trial-landing">
            Start Free Trial
          </a>
        </button>
      </nav>
    </header>
  );
};

export default Header;
