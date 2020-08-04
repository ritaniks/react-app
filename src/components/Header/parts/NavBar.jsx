import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { DropdownButton } from 'react-bootstrap';
import { switchIcon, links } from './navbarConfig';
import Logo from './Logo';

import css from './NavBar.module.scss';

const NavBar = ({ open, checkNewRoute }) => {
  // const [isOpen, setIsOpen] = useState('false');

  // const toggleOpen = () => setIsOpen(!isOpen);

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
      </nav>
    </>
  );
};

NavBar.propTypes = {
  open: PropTypes.bool.isRequired,
  checkNewRoute: PropTypes.func.isRequired,
};

export default NavBar;
