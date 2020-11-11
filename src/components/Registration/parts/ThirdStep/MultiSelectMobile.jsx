import React, { useState, useEffect } from 'react';

import css from './MultiSelectMobile.module.scss';

const tmp = {
  managers: [
    { name: 'Jack', checked: false, role: 'managers' },
    { name: 'Kate', checked: false, role: 'managers' },
    { name: 'Tom', checked: false, role: 'managers' },
  ],

  users: [
    { name: 'Elis', checked: false, role: 'users' },
    { name: 'Jonny', checked: false, role: 'users' },
    { name: 'Christian', checked: false, role: 'users' },
    { name: 'David', checked: false, role: 'users' },
    { name: 'Carter', checked: false, role: 'users' },
    { name: 'Evelyn', checked: false, role: 'users' },
    { name: 'Scarlett', checked: false, role: 'users' },
    { name: 'Eleanor', checked: false, role: 'users' },
    { name: 'Kingston', checked: false, role: 'users' },
    { name: 'Julian', checked: false, role: 'users' },
    { name: 'Lincoln', checked: false, role: 'users' },
    { name: 'Addison', checked: false, role: 'users' },
  ],
};

const MultiSelectMobile = () => {
  const [select, setSelect] = useState(tmp);
  const [selectAll, setSelectAll] = useState(false);
  const [selectManagers, setSelectManagers] = useState(false);
  const [selectUsers, setSelectUsers] = useState(false);
  // const [selectItems, setCheckItems] = useState(0);

  useEffect(() => {
    //  select all Managers
    const isSelectAllManager = select.managers.every(el => el.checked === true);

    if (isSelectAllManager) {
      setSelectManagers(true);
    } else {
      setSelectManagers(false);
    }

    //  select all Users
    const isSelectAllUsers = select.users.every(el => el.checked === true);

    if (isSelectAllUsers) {
      setSelectUsers(true);
    } else {
      setSelectUsers(false);
    }

    //  select ALL (users & managers)
    if (isSelectAllManager || isSelectAllUsers) {
      setSelectAll(false);
    }
    if (isSelectAllManager && isSelectAllUsers) {
      setSelectAll(true);
    }
  }, [select]);

  const handleSelect = e => {
    const selecRole = e.target.attributes.role.value;

    setSelect({
      ...select,
      [selecRole]: select[selecRole].map(el =>
        el.name === e.target.name ? { ...el, checked: !el.checked } : el,
      ),
    });
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);

    setSelect({
      ...select,

      managers: select.managers.map(el => {
        return { ...el, checked: !selectAll };
      }),
      users: select.users.map(el => {
        return { ...el, checked: !selectAll };
      }),
    });

    if (selectAll) {
      setSelectManagers(false);
      setSelectUsers(false);
    }
  };
  const handleSelectByRole = e => {
    if (e.target.name === 'managers') {
      setSelectManagers(!selectManagers);

      setSelect({
        ...select,

        managers: select.managers.map(el => {
          return { ...el, checked: !selectManagers };
        }),
      });
    }
    if (e.target.name === 'users') {
      setSelectUsers(!selectUsers);

      setSelect({
        ...select,
        users: select.users.map(el => {
          return { ...el, checked: !selectUsers };
        }),
      });
    }
  };
  return (
    <div className={css.wrapSelect}>
      <div className={css.wrapCheckBoxes}>
        <div className={css.wrapGroups}>
          <input
            onChange={handleSelectAll}
            type="checkbox"
            id="selectAllUsers"
            name="Select all"
            checked={selectAll}
          />
          <label htmlFor="selectAllUsers">Select all</label>
        </div>

        <div className={css.wrapGroups}>
          <input
            onChange={handleSelectByRole}
            type="checkbox"
            id="menegersRoleCheck"
            name="managers"
            checked={selectManagers}
          />
          <label htmlFor="menegersRoleCheck">Managers</label>
        </div>

        {select.managers.map((c, index) => (
          <div className={css.wrapInput} key={index}>
            <input
              onChange={handleSelect}
              type="checkbox"
              id={`${c.name}-${index}`}
              name={c.name}
              checked={c.checked}
              role={c.role}
            />
            <label htmlFor={`${c.name}-${index}`}>{c.name}</label>
          </div>
        ))}

        <div className={css.wrapGroups}>
          <input
            onChange={handleSelectByRole}
            type="checkbox"
            id="usersRoleCheck"
            name="users"
            checked={selectUsers}
          />
          <label htmlFor="usersRoleCheck">Users</label>
        </div>

        {select.users.map((c, index) => (
          <div className={css.wrapInput} key={index}>
            <input
              onChange={handleSelect}
              type="checkbox"
              id={`${c.name}-${index}`}
              name={c.name}
              checked={c.checked}
              role={c.role}
            />
            <label htmlFor={`${c.name}-${index}`}>{c.name}</label>
          </div>
        ))}
      </div>
      {/* <div className={css.wrapBtn}>
        <button
          className={css.btnClose}
          onClick={handleToogle}
          type="button"
        >
          CANCEL
        </button>
        <button
          className={css.btnClose}
          onClick={handleOk}
          type="button"
        >
          OK
        </button>
      </div> */}
    </div>
  );
};

export default MultiSelectMobile;
