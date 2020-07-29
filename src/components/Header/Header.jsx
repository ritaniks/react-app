import React from "react";

import AlertMessage from "./parts/AlertMessage";
import Logo from "./parts/Logo";
import TopBar from "./parts/NavBar";
import UserProfile from "./parts/UserProfile";

import css from "./Header.module.scss";

const Header = ({ user }) => {
  return (
    <div className={css.wrapHeader}>
      <AlertMessage />
      <div className={css.wrapInfoHeader}>
        <Logo />
        <UserProfile user={user} />
      </div>
      <TopBar />
    </div>
  );
};

export default Header;
