import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import css from './UserProfile.module.scss';

const UserProfile = ({ user }) => {
  const { name } = user;
  return (
    <div className={`${css.wrapUserProfile}`}>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          {name}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};
UserProfile.defaultProps = {
  user: null,
};
export default UserProfile;
