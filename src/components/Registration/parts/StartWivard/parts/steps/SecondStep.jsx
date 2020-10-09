import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import NextBtn from '../../../buttons/NextBtn';
// import PrevBtn from '../../../buttons/PrevBtn';
import SendInvite from '../../../buttons/SendInvite';

// import css from './steps.module.scss';

const Role = {
  Admin: 'Admin',
  Manager: 'Manager',
  User: 'User',
};

const SecondStep = ({ countClick, setCountClick }) => {
  const [userEmail, setUserEmail] = useState('name@example.com');
  const [userRole, setUserRole] = useState(Role.User);
  // const [users, setUsers] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userEmail, 'userEmail');
    console.log(userRole, 'userRole');
    // console.log('handleSubmit');
  };
  const handleChangeInput = ({ target }) => {
    setUserEmail(target.value);
    // userEmail = target.value;
  };
  const handleChangeRole = ({ target }) => {
    console.log(target, 'target');
    setUserRole(target.value);
    // userRole = target.value;
  };

  useEffect(() => {
    console.log('object');
  }, [userEmail, userRole]);

  return (
    <>
      <fieldset className="fieldset">
        <form onSubmit={handleSubmit}>
          <div className="form-card">
            <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1">
                <b>Invite by Email</b>
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="name@example.com"
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-2">
              <b>User Permissions</b>
            </div>
            <input
              type="radio"
              id="roleAdmin"
              name="roleUsers"
              value="Admin"
              checked={Role.Admin === 'Admin'}
              readOnly
              onClick={handleChangeRole}
            />
            <label className="mr-2 pl-2" htmlFor="roleAdmin">
              {Role.Admin}
            </label>

            <input
              type="radio"
              id="roleManager"
              name="roleUsers"
              value="Manager"
              checked={Role.Manager === 'Manager'}
              readOnly
              onClick={handleChangeRole}
            />
            <label className="mr-2 pl-2" htmlFor="roleManager">
              {Role.Manager}
            </label>
            <input
              type="radio"
              id="roleUser"
              name="roleUsers"
              value="User"
              checked={Role.User === 'User'}
              readOnly
              onClick={handleChangeRole}
            />
            <label className="pl-2" htmlFor="roleUser">
              {Role.User}
            </label>

            <SendInvite />
          </div>
          {/* if you need Previous Page */}
          {/* <PrevBtn countClick={countClick} setCountClick={setCountClick} /> */}
          <NextBtn countClick={countClick} setCountClick={setCountClick} />
        </form>
      </fieldset>
    </>
  );
};

SecondStep.propTypes = {
  countClick: PropTypes.number.isRequired,
  setCountClick: PropTypes.func.isRequired,
};

export default SecondStep;
