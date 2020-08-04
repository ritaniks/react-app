import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import cn from 'classnames';

import { DropdownButton } from 'react-bootstrap';
import Logo from './Logo';
import { switchIcon, links } from './navbarConfig';

import css from './NavBar.module.scss';

// import { ReactComponent as Dashboard } from '../../../assets/img/header/dashboard.svg';
// import { ReactComponent as Clock } from '../../../assets/img/header/clock.svg';
// import { ReactComponent as Dollar } from '../../../assets/img/header/dollar.svg';
// import { ReactComponent as ChartPie } from '../../../assets/img/header/chart-pie.svg';
// import { ReactComponent as Briefcase } from '../../../assets/img/header/briefcase.svg';
// import { ReactComponent as Settings } from '../../../assets/img/header/settings.svg';

const NavBar = ({ open, checkNewRoute }) => {
  return (
    <>
      <nav className={cn(css.nav, !open && css.nav_visible)}>
        {/* <div
          className={css.wrapLogo}
          onClick={() => checkNewRoute()}
          role="link"
          onKeyDown={() => console.log('...')}
          tabIndex={0}
        >
          <Logo />
        </div> */}
        <button
          type="button"
          className={css.wrapLogo}
          onClick={() => checkNewRoute()}
        >
          <Logo />
        </button>

        {links.map(link => {
          if (link.link === 'link') {
            return (
              <div key={link.id} className={css.wrapLink}>
                {switchIcon(link.icon)}
                <NavLink
                  className={cn(css.navLink, css.link)}
                  to={link.route}
                  exact
                  onClick={() => checkNewRoute()}
                >
                  {link.name}
                </NavLink>
              </div>
            );
          }
          return (
            <div key={link.id} className={css.wrapLink}>
              {switchIcon(link.icon)}
              <DropdownButton
                id="dropdown-basic-button"
                className={`${css.link} ${css.dropdown} `}
                title={link.title}
              >
                {link.routes.map((r, index) => (
                  <NavLink
                    key={index}
                    className={css.navLinkIn}
                    to={r.route}
                    exact
                    onClick={() => checkNewRoute()}
                  >
                    {r.name}
                  </NavLink>
                ))}
              </DropdownButton>
            </div>
          );
        })}

        {/* <div className={css.wrapLink}>
          <Dashboard className={css.icon} />
          <NavLink
            className={`${css.navLink} ${css.bgDashbord} ${css.link}`}
            to="/"
            exact
            onClick={() => checkNewRoute()}
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
            <NavLink
              className={css.navLinkIn}
              to="/week_view"
              exact
              onClick={() => checkNewRoute()}
            >
              Week View
            </NavLink>

            <NavLink
              className={css.navLinkIn}
              to="/timesheet_period_view"
              exact
              onClick={() => checkNewRoute()}
            >
              Timesheet Period View
            </NavLink>

            <NavLink
              className={css.navLinkIn}
              to="/day_view"
              exact
              onClick={() => checkNewRoute()}
            >
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
            <NavLink
              className={css.navLinkIn}
              to="/enter_expenses"
              exact
              onClick={() => checkNewRoute()}
            >
              Enter Expenses
            </NavLink>

            <NavLink
              className={css.navLinkIn}
              to="/view_expenses"
              exact
              onClick={() => checkNewRoute()}
            >
              View Expenses
            </NavLink>

            <NavLink
              className={css.navLinkIn}
              to="/expense_detail_report"
              exact
              onClick={() => checkNewRoute()}
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
              onClick={() => checkNewRoute()}
            >
              Administrative Reports
            </NavLink>

            <NavLink
              className={css.navLinkIn}
              to="/your_reports"
              exact
              onClick={() => checkNewRoute()}
            >
              Your Reports
            </NavLink>
          </DropdownButton>
        </div>

        <div className={css.wrapLink}>
          <Briefcase className={css.icon} />
          <NavLink
            className={`${css.navLink}  ${css.link}`}
            to="/maintenance"
            exact
            onClick={() => checkNewRoute()}
          >
            Maintenance
          </NavLink>
        </div>

        <div className={css.wrapLink}>
          <Settings className={css.icon} />
          <NavLink
            className={`${css.navLink} ${css.link}`}
            to="/settings"
            exact
            onClick={() => checkNewRoute()}
          >
            Settings
          </NavLink>
        </div> */}
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

NavBar.propTypes = {
  open: PropTypes.bool.isRequired,
  checkNewRoute: PropTypes.func.isRequired,
};

export default NavBar;
