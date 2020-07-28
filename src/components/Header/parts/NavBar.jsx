import React from "react";
import { NavLink } from "react-router-dom";

import css from "./NavBar.module.scss";

const ativeStyle = {
  backgroundColor: "#134790",
  color: "white",
};

const NavBar = () => {
  return (
    <nav className={css.wrapNavBar}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            className={css.navLink}
            activeStyle={ativeStyle}
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            className={`${css.navLink} ${css.bgDashbord}`}
            activeStyle={ativeStyle}
            to="/dashboard"
            exact
          >
            Dashboard
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            className={css.navLink}
            to="/time_entry"
            exact
            activeStyle={ativeStyle}
          >
            Time Entry
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            className={css.navLink}
            to="/expenses"
            exact
            activeStyle={ativeStyle}
          >
            Expenses
          </NavLink>
        </li>

        <li className={css.navItem}>
          <NavLink
            className={css.navLink}
            to="/administrative_reports"
            exact
            activeStyle={ativeStyle}
          >
            Administrative Reports
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            className={css.navLink}
            to="/maintenance"
            exact
            activeStyle={ativeStyle}
          >
            Maintenance
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            className={css.navLink}
            to="/settings"
            exact
            activeStyle={ativeStyle}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
