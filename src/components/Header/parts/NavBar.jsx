import React from 'react';
import { NavLink } from 'react-router-dom';

import { DropdownButton } from 'react-bootstrap';
import css from './NavBar.module.scss';

// import { ReactComponent as Burger } from '../../../assets/img/header/burger.svg';
import { ReactComponent as Dashboard } from '../../../assets/img/header/dashboard.svg';
import { ReactComponent as Clock } from '../../../assets/img/header/clock.svg';
import { ReactComponent as Dollar } from '../../../assets/img/header/dollar.svg';
import { ReactComponent as ChartPie } from '../../../assets/img/header/chart-pie.svg';
import { ReactComponent as Briefcase } from '../../../assets/img/header/briefcase.svg';
import { ReactComponent as Settings } from '../../../assets/img/header/settings.svg';

const NavBar = () => {
  return (
    <>
      {/* <Burger className={`${css.menuIcon}`} /> */}

      <nav className={css.nav}>
        <div className={css.wrapLink}>
          <Dashboard className={css.icon} />
          <NavLink
            className={`${css.navLink} ${css.bgDashbord} ${css.link}`}
            to="/"
            exact
          >
            Dashboard
          </NavLink>
        </div>

        <div className={css.wrapLink}>
          <Clock className={css.icon} />
          <DropdownButton
            id="dropdown-basic-button"
            className={`${css.link} ${css.dropdown} `}
            title="Time Entry"
          >
            <NavLink className={css.navLinkIn} to="/week_view" exact>
              Week View
            </NavLink>

            <NavLink
              className={css.navLinkIn}
              to="/timesheet_period_view"
              exact
            >
              Timesheet Period View
            </NavLink>

            <NavLink className={css.navLinkIn} to="/day_view" exact>
              Day View
            </NavLink>
          </DropdownButton>
        </div>

        <div className={css.wrapLink}>
          <Dollar className={css.icon} />
          <DropdownButton
            id="dropdown-basic-button"
            className={`${css.link} ${css.dropdown} `}
            title="Expenses"
          >
            <NavLink className={css.navLinkIn} to="/enter_expenses" exact>
              Enter Expenses
            </NavLink>

            <NavLink className={css.navLinkIn} to="/view_expenses" exact>
              View Expenses
            </NavLink>

            <NavLink
              className={css.navLinkIn}
              to="/expense_detail_report"
              exact
            >
              Expense Detail Report
            </NavLink>
          </DropdownButton>
        </div>

        <div className={css.wrapLink}>
          <ChartPie className={css.icon} />
          <DropdownButton
            id="dropdown-basic-button"
            className={`${css.link} ${css.dropdown}`}
            title="Reports"
          >
            <NavLink
              className={css.navLinkIn}
              to="/administrative_reports"
              exact
            >
              Administrative Reports
            </NavLink>

            <NavLink className={css.navLinkIn} to="/your_reports" exact>
              Your Reports
            </NavLink>
          </DropdownButton>
        </div>

        <div className={css.wrapLink}>
          <Briefcase className={css.icon} />
          <NavLink className={css.navLink} to="/maintenance" exact>
            Maintenance
          </NavLink>
        </div>

        <div className={css.wrapLink}>
          <Settings className={css.icon} />
          <NavLink className={css.navLink} to="/settings" exact>
            Settings
          </NavLink>
        </div>
      </nav>
      {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            week_view
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <NavLink className={css.navLink} to="/settings" exact>
            Settings
          </NavLink>
            <NavLink className={css.navLink} to="/settings" exact>
            Settings
          </NavLink>
            <NavLink className={css.navLink} to="/settings" exact>
            Settings
          </NavLink>
          </Dropdown.Menu>
        </Dropdown> */}
    </>
  );
};

export default NavBar;
