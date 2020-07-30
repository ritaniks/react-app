import React from 'react';
import { NavLink } from 'react-router-dom';

import { DropdownButton, Dropdown } from 'react-bootstrap';
import css from './NavBar.module.scss';

const ativeStyle = {
  backgroundColor: '#134790',
  color: 'white',
};

const NavBar = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        className={`${css.navLink} ${css.bgDashbord} ${css.link}`}
        activeStyle={ativeStyle}
        to="/"
        exact
      >
        Dashboard
      </NavLink>

      <DropdownButton
        className={`${css.link} ${css.dropdown}`}
        title="Time Entry"
      >
        <Dropdown.Item>
          <NavLink
            className={css.navLinkIn}
            to="/week_view"
            exact
            activeStyle={ativeStyle}
          >
            Week View
          </NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink
            className={css.navLinkIn}
            to="/timesheet_period_view"
            exact
            activeStyle={ativeStyle}
          >
            Timesheet Period View
          </NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink
            className={css.navLinkIn}
            to="/day_view"
            exact
            activeStyle={ativeStyle}
          >
            Day View
          </NavLink>
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        className={`${css.link} ${css.dropdown}`}
        title="Expenses"
      >
        <Dropdown.Item>
          <NavLink
            className={css.navLinkIn}
            to="/enter_expenses"
            exact
            activeStyle={ativeStyle}
          >
            Enter Expenses
          </NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink
            className={css.navLinkIn}
            to="/view_expenses"
            exact
            activeStyle={ativeStyle}
          >
            View Expenses
          </NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink
            className={css.navLinkIn}
            to="/expense_detail_report"
            exact
            activeStyle={ativeStyle}
          >
            Expense Detail Report
          </NavLink>
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton className={`${css.link} ${css.dropdown}`} title="Reports">
        <Dropdown.Item>
          <NavLink
            className={css.navLinkIn}
            to="/administrative_reports"
            exact
            activeStyle={ativeStyle}
          >
            Administrative Reports
          </NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink
            className={css.navLinkIn}
            to="/your_reports"
            exact
            activeStyle={ativeStyle}
          >
            Your Reports
          </NavLink>
        </Dropdown.Item>
      </DropdownButton>
      <NavLink
        className={css.navLink}
        to="/maintenance"
        exact
        activeStyle={ativeStyle}
      >
        Maintenance
      </NavLink>

      <NavLink
        className={css.navLink}
        to="/settings"
        exact
        activeStyle={ativeStyle}
      >
        Settings
      </NavLink>
    </nav>
  );
};

export default NavBar;
