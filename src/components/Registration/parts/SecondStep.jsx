import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NextBtn from '../buttons/NextBtn';
// import PrevBtn from '../buttons/PrevBtn';
import SendInvite from '../buttons/SendInvite';

import css from './steps.module.scss';

// const defaultInputs = { email: '', role: 'User' name: "" };

const Role = {
  Admin: 'Admin',
  Manager: 'Manager',
  User: 'User',
};

const SecondStep = ({ countClick, setCountClick }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userRole, setUserRole] = useState(Role.User);
  // const [users, setUsers] = useState([defaultInputs, {}, {}, {}]);
  const [isInputWasChanged, setIsInputWasChanged] = useState(false);

  const [isValid, setIsValid] = useState(false);

  // helpers
  function validation(str) {
    // eslint-disable-next-line no-useless-escape
    const pattern = /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g;

    // console.log(str);
    // const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
    // const regex = /[A-Z]/g;
    // const found = paragraph.match(regex);
    console.log(str.match(pattern), 'str.match(pattern)');

    setIsValid(str.match(pattern));
    console.log(str, 'str');

    // isValid;

    return false;
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userEmail, 'userEmailsssssss');
    console.log(userRole, 'userRolesssss');

    const valid = validation(userEmail);

    // const valid = true;
    if (valid) {
      setUserEmail('');
      setUserRole(Role.User);
    }
  };

  const handleChangeInput = e => {
    e.preventDefault();
    const prevVal = e.target.value;

    setUserEmail(prevVal);

    // TO DO validation
    // console.dir();
    // console.log(e, 'key');

    if (isInputWasChanged === false) {
      // TO DO logic to create a new input and checkBoxes

      // console.dir(e.target, 'e.target.value');
      // const createInput = () => {
      //   console.log('create start');
      setIsInputWasChanged(true);
      // };

      // createInput();

      // To add in users -> user obj
      // const oneUser = {};
    }

    if (e.target.value === '') {
      setIsInputWasChanged(false);
    }

    setUserEmail(prevVal);
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
        <div className={css.wrapTitles}>
          <h6>Invite by Email</h6>
          <h6>User Permissions</h6>
        </div>
        <div className={css.wrapAllInputsInvite}>
          <div className={css.wrapByEmail}>
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
            {isInputWasChanged !== false && <p>new input</p>}
          </div>
          <div className={css.wrapByRole}>
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
            </div>
            <div> {isInputWasChanged !== false && <p>new checkboxes</p>}</div>
          </div>
        </div>
        <form className={css.form} type="submit" onSubmit={handleSubmit}>
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
