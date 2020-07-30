import React from 'react';
import { NavLink } from 'react-router-dom';

import { DropdownButton, Dropdown } from 'react-bootstrap';
import css from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        className={`${css.navLink} ${css.bgDashbord} ${css.link}`}
        to="/"
        exact
      >
        Dashboard
      </NavLink>

      <DropdownButton
        className={`${css.link} ${css.dropdown}`}
        title="Time Entry"
      >
        <Dropdown.Item className={css.dropItem}>
          <NavLink className={css.navLinkIn} to="/week_view" exact>
            Week View
          </NavLink>
        </Dropdown.Item>
        <Dropdown.Item className={css.dropItem}>
          <NavLink className={css.navLinkIn} to="/timesheet_period_view" exact>
            Timesheet Period View
          </NavLink>
        </Dropdown.Item>
        <Dropdown.Item className={css.dropItem}>
          <NavLink className={css.navLinkIn} to="/day_view" exact>
            Day View
          </NavLink>
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        className={`${css.link} ${css.dropdown}`}
        title="Expenses"
      >
        <Dropdown.Item>
          <NavLink className={css.navLinkIn} to="/enter_expenses" exact>
            Enter Expenses
          </NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink className={css.navLinkIn} to="/view_expenses" exact>
            View Expenses
          </NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink className={css.navLinkIn} to="/expense_detail_report" exact>
            Expense Detail Report
          </NavLink>
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton className={`${css.link} ${css.dropdown}`} title="Reports">
        <Dropdown.Item>
          <NavLink className={css.navLinkIn} to="/administrative_reports" exact>
            Administrative Reports
          </NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink className={css.navLinkIn} to="/your_reports" exact>
            Your Reports
          </NavLink>
        </Dropdown.Item>
      </DropdownButton>
      <NavLink className={css.navLink} to="/maintenance" exact>
        Maintenance
      </NavLink>

      <NavLink className={css.navLink} to="/settings" exact>
        Settings
      </NavLink>
    </nav>
  );
};

export default NavBar;
