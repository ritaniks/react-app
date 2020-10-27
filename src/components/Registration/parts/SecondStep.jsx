import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// import isEmail from 'validator/lib/isEmail';

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
  const [userEmail, setUserEmail] = useState(defaultInputs.email);
  const [userRole, setUserRole] = useState(Role.User);
  // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = useState(defaultInputs.name);

  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([defaultInputs]);
  const [isEmailWasChanged, setIsEmailWasChanged] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // console.log('one select');
    setUsers({ email: userEmail, role: userRole, name: userName });

    return () => {
      // console.log('return');
    };
  }, [userEmail, userName, userRole]);

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
      setUserEmail('');
      setUserRole(Role.User);
    }
  };

  const handleChangeEmail = e => {
    e.preventDefault();
    const prevVal = e.target.value;

    // console.log(e.target, 'target');

    setUserEmail(prevVal);

    // console.log(users, 'users');

    // setUsers(prev => [...prev, email: prevVal]);
    // setUsers(...users,
    //   email: prevVal
    //   );

    // exemple
    // setSelect({
    //   ...select,

    //   managers: select.managers.map(el => {
    //     return { ...el, checked: !selectManagers };
    //   }),
    // });

    // users.map((el, index) => {
    // let { email } = el;
    // console.log(el.email);
    // console.log(el.role);
    // console.log(el.name);

    // console.log(users, 'users');

    // TO DO validation
    // console.dir();
    // console.log(e, 'key');
    // {console.log(isEmail('foo@bar.com'))}

    if (isEmailWasChanged === false) {
      // TO DO logic to create a new input and checkBoxes

      // console.dir(e.target, 'e.target.value');
      // const createInput = () => {
      //   console.log('create start');
      setIsEmailWasChanged(true);
      // };

      // createInput();

      // To add in users -> user obj
      // const oneUser = {};
    }

    if (e.target.value === '') {
      setIsEmailWasChanged(false);
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
        <InputsUserInvite
          handleChangeEmail={handleChangeEmail}
          userEmail={userEmail}
          isEmailWasChanged={isEmailWasChanged}
          userRole={userRole}
          handleChangeRole={handleChangeRole}
          users={users}
        />

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
  isEmailWasChanged,
  userRole,
  handleChangeRole,
  // eslint-disable-next-line
  users,
}) {
  const RenderOneIvite = (...props) => {
    // eslint-disable-next-line react/prop-types
    // const { users } = this.props;
    console.log(props, 'props');
    // console.log(users[0].role, 'users[0].role');
    // console.log(role, 'role');
    // for (let user in users) {
    //   console.log(user, 'user');

    //   // users[0].map((u, ind) => console.log(u, ind, 'user2'));
    // }

    // let oneInvite = users.forEach(el => {
    //   console.dir(el.role, 'el');
    //   console.log(el.email, 'email');
    //   console.log(el.name, 'name');

    if (!users[0].id) {
      users[0].id = uuidv4();
      console.log(users[0].id, 'users[0].id');
    }

    console.log(users, 'users');

    return <p>{users[0].id}</p>;

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
  };

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
      <RenderOneIvite />
      <div className={css.wrapByEmail}>
        {/* <input
          type="email"
          className="form-control"
          id="inputInviteByEmail"
          // aria-describedby="emailHelp"
          placeholder="name@example.com"
          onChange={handleChangeEmail}
          value={userEmail}
        /> */}

        {/* {renderOneIvite } */}
        {/* {isEmailWasChanged !== false && (
          <input
            type="email"
            className="form-control"
            id="inputInviteByEmail2"
            // aria-describedby="emailHelp"
            placeholder="name@example.com"
            onChange={handleChangeEmail}
            value=""
          />
        )} */}
      </div>
      <div className={css.wrapByRole}>
        {/* <div className={css.wrapCheckBoxes}>
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
        <div> {isEmailWasChanged !== false && <p>new checkboxes</p>}</div> */}
      </div>
    </div>
  );
}

InputsUserInvite.propTypes = {
  handleChangeEmail: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  isEmailWasChanged: PropTypes.bool.isRequired,
  userRole: PropTypes.string.isRequired,
  handleChangeRole: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  users: PropTypes.any.isRequired,
};
