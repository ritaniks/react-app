import React from 'react';
import PropTypes from 'prop-types';

import AlertMessage from './parts/AlertMessage';
import Logo from './parts/Logo';
import TopBar from './parts/NavBar';
import UserProfile from './parts/UserProfile';
import { ReactComponent as Burger } from '../../assets/img/header/burger.svg';

import css from './Header.module.scss';

const Header = ({ user }) => {
  return (
    <div className={css.wrapHeader}>
      <AlertMessage />
      <div className={css.wrapInfoHeader}>
        <Burger className={`${css.menuIcon}`} />
        <Logo />
        <UserProfile user={user} />
      </div>
      <TopBar />
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default Header;
