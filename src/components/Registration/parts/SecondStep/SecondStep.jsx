import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';

import isEmail from 'validator/lib/isEmail';

import NextBtn from '../../buttons/NextBtn';
// import PrevBtn from '../buttons/PrevBtn';
import SendInvite from '../../buttons/SendInvite';

import css from './SecondStep.module.scss';

const defaultInputs = { email: '', role: 'User', name: '' };

const Role = {
  Admin: 'Admin',
  Manager: 'Manager',
  User: 'User',
};

const SecondStep = ({ countClick, setCountClick, setGlobalUsers }) => {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([defaultInputs]);
  const [sendInviteArray, setSendInviteArray] = useState([]);

  const ref = useRef();
  // console.log(ref, 'ref');

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
      // console.log(newUsersArr, 'newUsersArr afte send');
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
    const isValidEmail = () => (targetVal.length >= 6 ? isEmail(targetVal) : 0);

    // userName
    const getUserName = () => {
      const name = targetVal.substring(0, targetVal.indexOf('@'));
      return name.charAt(0).toUpperCase() + name.slice(1);
    };

    const getId = el => (!el.id ? uuidv4() : el.id);

    const newArr = users.map((el, ind) => {
      if (ind === indexOfValue) {
        return {
          ...el,
          email: targetVal,
          isValid: isValidEmail(),
          name: getUserName(),
          id: getId(el),
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
          // console.log(targetVal, 'targetVal');
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
  setGlobalUsers: PropTypes.func.isRequired,
};

export default SecondStep;

function InputsUserInvite({ handleChangeEmail, handleChangeRole, ind, users }) {
  const handleSubmit = e => {
    console.log('preventDefault');
    e.preventDefault();
  };

  return (
    <li className={css.wrapAllInputsInvite}>
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
          placeholder="mail@mail.com"
          onChange={handleChangeEmail}
          value={users[ind].email}
          valid="true"
        />
      </form>
      <form className={css.wrapByRole}>
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
      </form>
    </li>
  );
}

InputsUserInvite.propTypes = {
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangeRole: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  ind: PropTypes.number.isRequired,
};
