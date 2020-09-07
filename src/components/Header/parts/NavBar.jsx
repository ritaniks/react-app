import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

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
