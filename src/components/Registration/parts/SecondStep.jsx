import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';

import isEmail from 'validator/lib/isEmail';

import NextBtn from '../buttons/NextBtn';
// import PrevBtn from '../buttons/PrevBtn';
import SendInvite from '../buttons/SendInvite';

import css from './steps.module.scss';

const defaultInputs = { email: '', role: 'User', name: '' };

const Role = {
  Admin: 'Admin',
  Manager: 'Manager',
  User: 'User',
};

const SecondStep = ({ countClick, setCountClick }) => {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([defaultInputs]);
  const [sendInviteArray, setSendInviteArray] = useState([]);

  const ref = useRef('rrr');
  console.log(ref, 'ref');
  // console.log(uuidv4(), 'uuidv4');

  useEffect(() => {
    const indexLastArr = users.length - 1;
    if (users[indexLastArr].email !== '') {
      setUsers([...users, defaultInputs]);
    }
  }, [users]);

  const handleSubmit = e => {
    e.preventDefault();

    const indexLastArr = users.length - 1;
    if (users[indexLastArr].email === '') {
      const newUsersArr = users.filter(
        el => el.email !== '' && el.isValid === true,
      );

      // TODO function for send
      console.log(newUsersArr, 'newUsersArr afte send');
      setSendInviteArray([...sendInviteArray, ...newUsersArr]);
      // reset all invites
      setUsers([defaultInputs]);
    }
  };

  const handleChangeEmail = e => {
    // email
    e.preventDefault();
    const targetVal = e.target.value;
    const indexOfValue = +e.target.attributes.ind.value;

    // validation
    const isValidEmail = () => {
      if (targetVal.length >= 6) {
        return isEmail(targetVal);
      }
      return 0;
    };
    // userName
    const getUserName = () => {
      const name = targetVal.substring(0, targetVal.indexOf('@'));
      const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1);
      return capitalizeName;
    };

    const newArr = users.map((el, ind) => {
      if (ind === indexOfValue) {
        return {
          ...el,
          email: targetVal,
          isValid: isValidEmail(),
          name: getUserName(),
        };
      }
      return el;
    });

    setUsers(newArr);
  };

  const handleChangeRole = e => {
    const targetVal = e.target.value;
    const index = +e.target.attributes.ind.value;

    setUsers(
      users.map((el, id) => {
        if (id === index) {
          console.log(targetVal, 'targetVal');
          return { ...el, role: targetVal };
        }
        return el;
      }),
    );
  };

  const handleBlur = e => {
    // TO DO onBlur
    // const targetVal = e.target.value;
    // const index = +e.target.attributes.ind.value;
    // if (!isEmail(targetVal)) {
    //   setUsers(
    //     users.map((el, id) => (id === index ? { ...el, isValid: false } : el)),
    //   );
    // }
  };

  return (
    <>
      <fieldset className="fieldset">
        <div className={css.wrapTitles}>
          <h6>Invite by Email</h6>
          <h6>User Permissions</h6>
        </div>
        <ul>
          {users.map((u, index) => {
            return (
              <InputsUserInvite
                refInd={ref}
                key={index}
                ind={index}
                handleChangeEmail={handleChangeEmail}
                userEmail={u.email}
                userRole={u.role}
                handleChangeRole={handleChangeRole}
                users={users}
                handleBlur={handleBlur}
              />
            );
          })}
        </ul>
        <form className={css.form} type="submit" onSubmit={handleSubmit}>
          <SendInvite />
          {/* if you need Previous Page */}
          {/* <PrevBtn countClick={countClick} setCountClick={setCountClick} /> */}
          <NextBtn countClick={countClick} setCountClick={setCountClick} />
        </form>

        {sendInviteArray.length > 0 &&
          sendInviteArray.map((send, i) => (
            <div key={i}>send invite to -&gt; {send.email}</div>
          ))}
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
  handleChangeRole,
  handleBlur,
  ind,
  refInd,
  users,
}) {
  const handleSubmit = e => {
    console.log('preventDefault');
    e.preventDefault();
    console.log(refInd.current.lastChild.firstChild, 'e');
    console.dir(refInd.current.lastChild.firstChild.firstChild.autofocus, 'e');
    // console.dir(refInd.current.attributes.id.nodeValue, 'e');
    // console.dir(refInd.current, 'e');

    // refInd.current.willValidate = false;
    // console.dir(e.ref, 'e');
    // ;
    // e.blur();
    // console.dir((e.target.onblur = false), 'e.target');
  };

  return (
    <li ref={refInd} className={css.wrapAllInputsInvite}>
      <form onSubmit={handleSubmit} className={css.wrapByEmail}>
        <input
          type="email"
          className={cn(
            'form-control',
            !users[ind].isValid && users[ind].email.length > 6
              ? css.error
              : css.valid,
          )}
          id={`${ind}-inputInviteByEmail`}
          ind={ind}
          placeholder="name@example.com"
          onChange={handleChangeEmail}
          value={users[ind].email}
          onBlur={handleBlur}
          valid="true"
        />
      </form>
      <div className={css.wrapByRole}>
        <div className={css.wrapCheckBoxes}>
          <input
            ind={ind}
            type="radio"
            id={`${users[ind].email}-Admin`}
            name={`${users[ind]}-Admin`}
            value="Admin"
            checked={users[ind].role === 'Admin'}
            onChange={handleChangeRole}
          />
          <label
            className={`${css.label} mr-2 pl-2`}
            htmlFor={`${users[ind].email}-Admin`}
          >
            {Role.Admin}
          </label>
          <input
            ind={ind}
            type="radio"
            id={`${users[ind].email}-Manager`}
            name={`${users[ind]}-Manager`}
            value="Manager"
            checked={users[ind].role === 'Manager'}
            onChange={handleChangeRole}
          />
          <label
            className={`${css.label} mr-2 pl-2`}
            htmlFor={`${users[ind].email}-Manager`}
          >
            {Role.Manager}
          </label>
          <input
            ind={ind}
            type="radio"
            id={`${users[ind].email}-User`}
            name={`${users[ind]}-User`}
            value="User"
            checked={users[ind].role === 'User'}
            onChange={handleChangeRole}
          />
          <label
            className={`${css.label}  pl-2`}
            htmlFor={`${users[ind].email}-User`}
          >
            {Role.User}
          </label>
        </div>
      </div>
    </li>
  );
}

InputsUserInvite.propTypes = {
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangeRole: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  ind: PropTypes.number.isRequired,
};
