import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { DropdownButton, Dropdown } from 'react-bootstrap';
import { switchIcon, links } from './navbarConfig';
import Logo from './Logo';

import css from './NavBar.module.scss';
import '../../../assets/css/_custom.scss';

const NavBar = ({ open, checkNewRoute }) => {
  return (
    <>
      <nav className={cn(css.nav, !open && css.nav_visible)}>
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
                  <Dropdown.Item
                    as="button"
                    key={index}
                    className={css.dropdownItem}
                  >
                    <NavLink
                      className={css.navLinkIn}
                      to={r.route}
                      exact
                      onClick={() => checkNewRoute()}
                    >
                      {r.name}
                    </NavLink>
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
          );
        })}
      </nav>
    </>
  );
};

NavBar.propTypes = {
  open: PropTypes.bool.isRequired,
  checkNewRoute: PropTypes.func.isRequired,
};

export default NavBar;
