import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'react-bootstrap';
import { ReactComponent as Logout } from '../../../assets/img/header/logout.svg';
import { ReactComponent as User } from '../../../assets/img/header/user.svg';

import css from './UserProfile.module.scss';

const UserProfile = ({ user }) => {
  return (
    <div className={`${css.wrapUserProfile}`}>
      <Dropdown>
        <Dropdown.Toggle
          className={css.userName}
          variant=""
          id="dropdown-basic"
          title="Equantive Inc. #235"
        >
          <User className={css.userIcon} />
          <span> {user.name}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className={css.menu}>
          <Dropdown.Header className={css.menuTitle}>
            Equantive Inc. #235
          </Dropdown.Header>

          <Dropdown.Divider />
          <Dropdown.Item className={css.item} href="#/action-1">
            <User className={css.icon} />
            <span> Profile</span>
          </Dropdown.Item>
          <Dropdown.Item className={css.item} href="#/action-2">
            <Logout className={css.icon} />
            <span> Logout</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserProfile;
