import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NextBtn from '../buttons/NextBtn';
// import PrevBtn from '../buttons/PrevBtn';
import SendInvite from '../buttons/SendInvite';

import css from './steps.module.scss';

const defaultInputs = { email: '', role: 'User' };

const Role = {
  Admin: 'Admin',
  Manager: 'Manager',
  User: 'User',
};

const SecondStep = ({ countClick, setCountClick }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userRole, setUserRole] = useState(Role.User);
  // const [users, setUsers] = useState([defaultInputs, {}, {}, {}]);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(userEmail, 'userEmailsssssss');
    // console.log(userRole, 'userRolesssss');

    setUserEmail('');
    setUserRole(Role.User);
  };
  const handleChangeInput = ({ target }) => {
    // console.log(target.value, 'target1');
    setUserEmail(target.value);
  };
  const handleChangeRole = ({ target }) => {
    // console.log(target.value, 'target2');
    setUserRole(target.value);
  };

  // useEffect(() => {
  //   // console.log(userEmail, 'userEmail');
  //   // console.log(userRole, 'userRole');
  // }, [userEmail, userRole]);

  return (
    <>
      <fieldset className="fieldset">
        <form className={css.form} type="submit" onSubmit={handleSubmit}>
          <div className={css.wrapTitles}>
            <h6>Invite by Email</h6>
            <h6>User Permissions</h6>
          </div>
          <div className={css.wrapAllInputsInvite}>
            <div className={css.wrapByEmail}>
              {/* <label htmlFor="inputInviteByEmail"> */}
              {/* <h6>Invite by Email</h6> */}
              {/* </label> */}

              {/* loop for create  */}
              <input
                type="email"
                className="form-control"
                id="inputInviteByEmail"
                aria-describedby="emailHelp"
                placeholder="name@example.com"
                onChange={handleChangeInput}
                value={userEmail}
              />
            </div>
            <div className={css.wrapByRole}>
              {/* <h6>User Permissions</h6> */}
              <div className={css.wrapCheckBoxes}>
                {/* loop for create new checkboxes */}
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
                <label
                  className={`${css.label} mr-2 pl-2`}
                  htmlFor="roleManager"
                >
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
              </div>
            </div>
          </div>
          <SendInvite />
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
