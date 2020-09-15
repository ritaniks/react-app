import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import AlertMessage from './parts/AlertMessage';
import Logo from './parts/Logo';
import NavBar from './parts/NavBar';

import UserProfile from './parts/UserProfile';
import { ReactComponent as Burger } from '../../assets/img/header/burger.svg';

import css from './Header.module.scss';

const Header = ({ user }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  const hendleOpen = () => {
    setOpen(!open);
  };

  const closeBar = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  const checkNewRoute = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeBar);
    return () => {
      document.removeEventListener('mousedown', closeBar);
    };
  }, []);

  return (
    <div className={css.wrapHeader}>
      <AlertMessage />
      <div className={css.wrapInfoHeader}>
        <Burger onClick={() => hendleOpen()} className={css.menuIcon} />
        <Logo />

        {/* <> */}
        <NavBar checkNewRoute={checkNewRoute} open={open} node={node} />
        <button
          type="button"
          className={css.wrapLogo}
          onClick={() => checkNewRoute()}
        >
          <Logo />
        </button>
        {/* </> */}

        <UserProfile user={user} />
      </div>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default Header;
