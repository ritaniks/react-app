import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import NextBtn from '../../../buttons/NextBtn';
// import PrevBtn from '../../../buttons/PrevBtn';
import SendInvite from '../../../buttons/SendInvite';

import css from './steps.module.scss';

const Role = {
  Admin: 'Admin',
  Manager: 'Manager',
  User: 'User',
};

const SecondStep = ({ countClick, setCountClick }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userRole, setUserRole] = useState('User');
  // const [users, setUsers] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userEmail, 'userEmailsssssss');
    console.log(userRole, 'userRolesssss');
    // console.log('handleSubmit');

    setUserEmail('');
    setUserRole(Role.User);
  };
  const handleChangeInput = ({ target }) => {
    console.log(target.value, 'target1');
    setUserEmail(target.value);
  };
  const handleChangeRole = ({ target }) => {
    console.log(target.value, 'target2');
    setUserRole(target.value);
  };

  useEffect(() => {
    // console.log(userEmail, 'userEmail');
    // console.log(userRole, 'userRole');
  }, [userEmail, userRole]);

  return (
    <>
      <fieldset className="fieldset">
        <form type="submit" onSubmit={handleSubmit}>
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
                value={userEmail}
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
              checked={userRole === 'Admin'}
              readOnly
              onClick={handleChangeRole}
            />
            <label className={`${css.label} mr-2 pl-2`} htmlFor="roleAdmin">
              {Role.Admin}
            </label>

            <input
              type="radio"
              id="roleManager"
              name="roleUsers"
              value="Manager"
              checked={userRole === 'Manager'}
              readOnly
              onClick={handleChangeRole}
            />
            <label className={`${css.label} mr-2 pl-2`} htmlFor="roleManager">
              {Role.Manager}
            </label>
            <input
              type="radio"
              id="roleUser"
              name="roleUsers"
              value="User"
              checked={userRole === 'User'}
              readOnly
              onClick={handleChangeRole}
            />
            <label className={`${css.label}  pl-2`} htmlFor="roleUser">
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
