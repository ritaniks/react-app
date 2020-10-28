import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

import isEmail from 'validator/lib/isEmail';

import NextBtn from '../buttons/NextBtn';
// import PrevBtn from '../buttons/PrevBtn';
import SendInvite from '../buttons/SendInvite';

import css from './steps.module.scss';

const defaultInputs = { email: ' ', role: 'User', name: '' };

const Role = {
  Admin: 'Admin',
  Manager: 'Manager',
  User: 'User',
};

const SecondStep = ({ countClick, setCountClick }) => {
  // const [userEmail, setUserEmail] = useState(defaultInputs.email);
  // const [userRole, setUserRole] = useState(Role.User);
  // // eslint-disable-next-line no-unused-vars
  // const [userName, setUserName] = useState(defaultInputs.name);

  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([defaultInputs]);
  // const [isEmailWasChanged, setIsEmailWasChanged] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [isValid, setIsValid] = useState(false);

  // useEffect(() => {
  //   // console.log('one select');
  //   // setUsers({ email: userEmail, role: userRole, name: userName });

  //   return () => {
  //     // console.log('return');
  //   };
  // }, [userEmail, userName, userRole]);

  // helpers
  // function validation(str) {
  // eslint-disable-next-line no-useless-escape
  // const pattern = /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g;

  // console.log(str);
  // const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
  // const regex = /[A-Z]/g;
  // const found = paragraph.match(regex);
  // console.log(str.match(pattern), 'str.match(pattern)');

  // setIsValid(str.match(pattern));
  // console.log(str, 'str');

  // console.log(validator, 'validator.isEmail(str)');
  // console.log(validator.isEmail(str), 'validator.isEmail(str)');
  // if (validator.isEmail(str)) {
  //   return true;
  // }
  // isValid;

  //   return false;
  // }

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(userEmail, 'userEmailsssssss');
    // console.log(userRole, 'userRolesssss');

    // const valid = validation(userEmail);

    const valid = true;
    if (valid) {
      // setUserEmail('');
      // setUserRole(Role.User);
    }
  };

  const handleChangeEmail = e => {
    e.preventDefault();
    const targetVal = e.target.value;
    const index = e.target.attributes.ind.value;

    // setUserEmail(targetVal);

    // setUsers(...users, (users[index].email: targetVal));
    // console.log(users, 'users');

    setUsers(
      users.map((el, id) => {
        // console.log(el, 'el');
        if (id === +index) {
          return { ...el, email: targetVal };
        }
        return el;
      }),
    );

    if (targetVal.length >= 6) {
      console.log(isEmail(targetVal), 'targetVal');
    }

    // TO DO validation
    // console.dir();
    // console.log(e, 'key');
    // {console.log(isEmail('foo@bar.com'))}

    // if (isEmailWasChanged === false) {
    //   // TO DO logic to create a new input and checkBoxes

    //   // console.dir(e.target, 'e.target.value');
    //   // const createInput = () => {
    //   //   console.log('create start');
    //   setIsEmailWasChanged(true);
    //   // };

    //   // createInput();

    //   // To add in users -> user obj
    //   // const oneUser = {};
    // }

    if (e.target.value === '') {
      // setIsEmailWasChanged(false);
    }

    // setUserEmail(prevVal);
  };

  const handleChangeRole = e => {
    const targetVal = e.target.value;
    const index = e.target.attributes.ind.value;

    setUsers(
      users.map((el, id) => {
        // console.log(el, 'el');
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
  userEmail,
  // isEmailWasChanged,
  userRole,
  handleChangeRole,
  // eslint-disable-next-line
  ind,
  users,
}) {
  //     <input
  //       type="email"
  //       className="form-control"
  //       id={el.id}
  //       // aria-describedby="emailHelp"
  //       placeholder="name@example.com"
  //       onChange={handleChangeEmail}
  //       value={el.email}
  //     />
  //   );
  // });

  // return oneInvite;
  // };

  useEffect(() => {
    // renderOneIvite();
  }, []);

  // console.log(users, 'users');

  // const func = () => {
  //   // eslint-disable-next-line react/prop-types
  //   users.forEach(el => {
  //     // console.dir(el.role, 'el');
  //   });
  // };

  // func();

  return (
    <div className={css.wrapAllInputsInvite}>
      {/* {console.log(ind, 'ind')} */}
      <div className={css.wrapByEmail}>
        <input
          type="email"
          className="form-control"
          id="inputInviteByEmail"
          ind={ind}
          // aria-describedby="emailHelp"
          placeholder="name@example.com"
          onChange={handleChangeEmail}
          value={userEmail}
        />
      </div>
      <div className={css.wrapByRole}>
        <div className={css.wrapCheckBoxes}>
          <input
            ind={ind}
            type="radio"
            // id="roleAdmin"
            id={`${users[ind]}-Admin`}
            name={`${users[ind]}-Admin`}
            value="Admin"
            checked={users[ind].role === 'Admin'}
            onChange={handleChangeRole}
            // readOnly
            // onClick={handleChangeRole}
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
            // readOnly
            // onClick={handleChangeRole}
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
            // id="roleUser"
            id={`${users[ind]}-User`}
            name={`${users[ind]}-User`}
            value="User"
            checked={users[ind].role === 'User'}
            onChange={handleChangeRole}
            // readOnly
            // onClick={handleChangeRole}
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
  userEmail: PropTypes.string,
  // isEmailWasChanged: PropTypes.bool.isRequired,
  userRole: PropTypes.string,
  handleChangeRole: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  users: PropTypes.any.isRequired,
};
