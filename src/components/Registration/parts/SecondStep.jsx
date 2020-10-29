import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

import isEmail from 'validator/lib/isEmail';

import NextBtn from '../buttons/NextBtn';
// import PrevBtn from '../buttons/PrevBtn';
import SendInvite from '../buttons/SendInvite';

import css from './steps.module.scss';

const defaultInputs = { email: '', role: 'User', name: '', isWasChange: false };

const Role = {
  Admin: 'Admin',
  Manager: 'Manager',
  User: 'User',
};

const SecondStep = ({ countClick, setCountClick }) => {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([defaultInputs]);
  // const [isEmailWasChanged, setIsEmailWasChanged] = useState(false);

  // const [isValid, setIsValid] = useState(false);

  // helpers

  function wasChange(lenthTargetVal, isWasChange) {
    if (lenthTargetVal === 1 && isWasChange === false) {
      console.log('isWasChange: true');
      return true;
    }
    return false;
  }

  const handleSubmit = e => {
    e.preventDefault();

    // TO DO logic for SUBMIT
    console.log(users, 'users to submit');

    // TO DO delete all invites

    setUsers([defaultInputs]);
  };

  const handleChangeEmail = e => {
    // email
    e.preventDefault();
    const targetVal = e.target.value;
    const lenthTargetVal = e.target.value.length;
    const index = e.target.attributes.ind.value;

    // validation
    const isValidEmail = () => {
      if (targetVal.length >= 6) {
        console.log('input validation is', isEmail(targetVal));
        return isEmail(targetVal);
      }
      console.log('input validation is', isEmail(targetVal));
      // return true;
    };
    // userName
    const getUserName = () => {
      const name = targetVal.substring(0, targetVal.indexOf('@'));
      const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1);
      return capitalizeName;
    };

    setUsers(
      users.map((el, id) => {
        if (id === +index) {
          // if (lenthTargetVal === 1 && isWasChange === false) {
          //   setUsers(
          //     users.map((el, id) => {
          //       if (id === +index) {
          //         return {
          //           isWasChange: true,
          //         };
          //       }

          //     }),
          //   );

          // function wasChange() {
          //   if (lenthTargetVal === 1 && el.isWasChange === false) {
          //     console.log('isWasChange: true');
          //     return true;
          //   }
          // }

          // wasChange(lenthTargetVal, el.isWasChange);

          return {
            ...el,
            email: targetVal,
            isValid: isValidEmail(),
            name: getUserName(),
            isWasChange: wasChange(lenthTargetVal, el.isWasChange),
          };
        }
        return el;
      }),
    );

    // if (isEmailWasChanged === false) {
    //   // TO DO logic to create a new input and checkBoxes

    //   // console.dir(e.target, 'e.target.value');
    //   // const createInput = () => {
    //   //   console.log('create start');
    //   setIsEmailWasChanged(true);
    //   // };

    // if (e.target.value.length === 1 && e.target.value === '') {
    //   setUsers(
    //     users.map((el, id) => {
    //       if (id === +index) {
    //         return {
    //           isWasChange: true,
    //         };
    //       }
    //       return el;
    //     }),
    //   );
    // setIsEmailWasChanged(false);
    // }
  };

  const handleChangeRole = e => {
    const targetVal = e.target.value;
    const index = e.target.attributes.ind.value;

    setUsers(
      users.map((el, id) => {
        if (id === +index) {
          return { ...el, role: targetVal };
        }
        return el;
      }),
    );
  };

  return (
    <>
      <fieldset className="fieldset">
        <div className={css.wrapTitles}>
          <h6>Invite by Email</h6>
          <h6>User Permissions</h6>
        </div>
        {users.map((u, index) => {
          // console.log(u, 'user');
          return (
            <InputsUserInvite
              key={index}
              ind={index}
              handleChangeEmail={handleChangeEmail}
              userEmail={u.email}
              // isEmailWasChanged={isEmailWasChanged}
              userRole={u.role}
              handleChangeRole={handleChangeRole}
              users={users}
            />
          );
        })}
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

function InputsUserInvite({
  handleChangeEmail,
  // isEmailWasChanged,
  handleChangeRole,
  // eslint-disable-next-line
  ind,
  users,
}) {
  // useEffect(() => {
  //   // to DO -> ADD one - renderOneIvite();
  // }, []);

  return (
    <div className={css.wrapAllInputsInvite}>
      {/* {console.log(ind, 'ind')} */}
      <div className={css.wrapByEmail}>
        <input
          type="email"
          className={`${css.inputEmail} form-control`}
          id="inputInviteByEmail"
          ind={ind}
          // aria-describedby="emailHelp"
          placeholder="name@example.com"
          onChange={handleChangeEmail}
          value={users[ind].email}
        />
      </div>
      <div className={css.wrapByRole}>
        <div className={css.wrapCheckBoxes}>
          <input
            ind={ind}
            type="radio"
            id={`${users[ind]}-Admin`}
            name={`${users[ind]}-Admin`}
            value="Admin"
            checked={users[ind].role === 'Admin'}
            onChange={handleChangeRole}
          />
          <label
            className={`${css.label} mr-2 pl-2`}
            htmlFor={`${users[ind]}-Admin`}
          >
            {Role.Admin}
          </label>
          <input
            ind={ind}
            type="radio"
            id={`${users[ind]}-Manager`}
            name={`${users[ind]}-Manager`}
            value="Manager"
            checked={users[ind].role === 'Manager'}
            onChange={handleChangeRole}
          />
          <label
            className={`${css.label} mr-2 pl-2`}
            htmlFor={`${users[ind]}-Manager`}
          >
            {Role.Manager}
          </label>
          <input
            ind={ind}
            type="radio"
            id={`${users[ind]}-User`}
            name={`${users[ind]}-User`}
            value="User"
            checked={users[ind].role === 'User'}
            onChange={handleChangeRole}
          />
          <label
            className={`${css.label}  pl-2`}
            htmlFor={`${users[ind]}-User`}
          >
            {Role.User}
          </label>
        </div>
        {/* <div> {isEmailWasChanged !== false && <p>new checkboxes</p>}</div> */}
      </div>
    </div>
  );
}

InputsUserInvite.propTypes = {
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangeRole: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
