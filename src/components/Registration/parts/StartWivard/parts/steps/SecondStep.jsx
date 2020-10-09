import React from 'react';
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
  const defaulProps = {
    userEmail: 'name@example.com',
    userRole: Role.User,
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(defaulProps.userEmail, defaulProps.userRole);
    console.log('handleSubmit');
  };
  const handleChange = ({ target }) => {
    defaulProps.userEmail = target.value;
  };

  return (
    <>
      <fieldset className="fieldset">
        <form>
          {/* onSubmit={handleSubmit} */}
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
                onChange={handleChange}
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
            />
            <label htmlFor="roleAdmin">{Role.Admin}</label>

            <input
              type="radio"
              id="roleManager"
              name="roleUsers"
              value="Manager"
              checked={Role.Manager === 'Manager'}
            />
            <label htmlFor="roleManager">{Role.Manager}</label>
            <input
              type="radio"
              id="roleUser"
              name="roleUsers"
              value="User"
              checked={Role.User === 'User'}
            />
            <label htmlFor="roleUser"> {Role.User}</label>

            <SendInvite />
          </div>
          {/* if you need Previous Page */}
          {/* <PrevBtn countClick={countClick} setCountClick={setCountClick} /> */}
          <NextBtn
            handleSubmit={handleSubmit}
            countClick={countClick}
            setCountClick={setCountClick}
          />
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
