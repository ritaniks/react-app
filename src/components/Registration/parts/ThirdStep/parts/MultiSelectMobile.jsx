import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addUsers, deleteUsers } from './helpersMultiSelect';

import css from './MultiSelectMobile.module.scss';

const MultiSelectMobile = ({
  choiseUsersIds,
  setChoiseUsersIds,
  globalUsers,
}) => {
  const [select, setSelect] = useState(globalUsers);
  const [selectAll, setSelectAll] = useState(false);
  const [selectAdmins, setSelectAdmins] = useState(false);
  const [selectManagers, setSelectManagers] = useState(false);
  const [selectUsers, setSelectUsers] = useState(false);
  // const [selectItems, setCheckItems] = useState(0);

  // CRUD for choiseUsersIds

  useEffect(() => {
    // console.log(globalUsers, 'globalUsers');
    console.log(choiseUsersIds, 'func choiseUsersIds');

    if (select.length <= 0) {
      return;
    }
    //  select all Admins
    const isSelectAllAdmin = select.admins.every(el => el.checked === true);

    if (isSelectAllAdmin) {
      setSelectAdmins(true);
    } else {
      setSelectAdmins(false);
    }
    const isSelectAllManager = select.managers.every(el => el.checked === true);

    //  select all Managers
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
    if (isSelectAllAdmin || isSelectAllManager || isSelectAllUsers) {
      setSelectAll(false);
    }
    if (isSelectAllAdmin && isSelectAllManager && isSelectAllUsers) {
      setSelectAll(true);
    }
  }, [select]);

  const handleSelect = e => {
    const selecRole = e.target.attributes.role.value;

    // console.log(selecRole, 'selecRole');

    setSelect({
      ...select,
      // [selecRole]: select[selecRole].map(el =>
      //   el.name === e.target.name ? { ...el, checked: !el.checked } : el,
      // ),
      [selecRole]: select[selecRole].map(el => {
        if (el.name === e.target.name) {
          if (!el.checked) {
            addUsers(el.id, choiseUsersIds, setChoiseUsersIds);
            console.log('true');
          } else {
            deleteUsers(el.id, choiseUsersIds, setChoiseUsersIds);
            console.log('false');
          }
          return { ...el, checked: !el.checked };
        }
        return el;
      }),
    });
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);

    setSelect({
      ...select,

      admins: select.admins.map(el => {
        return { ...el, checked: !selectAll };
      }),
      managers: select.managers.map(el => {
        return { ...el, checked: !selectAll };
      }),
      users: select.users.map(el => {
        return { ...el, checked: !selectAll };
      }),
    });

    if (selectAll) {
      setSelectAdmins(false);
      setSelectManagers(false);
      setSelectUsers(false);
    }
  };
  const handleSelectByRole = e => {
    if (e.target.name === 'admins') {
      setSelectAdmins(!selectAdmins);

      setSelect({
        ...select,

        admins: select.admins.map(el => {
          return { ...el, checked: !selectAdmins };
        }),
      });
    }

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
        {select.length <= 0 ? (
          <p>You have no users added</p>
        ) : (
          <>
            <div className={css.wrapGroups}>
              <input
                onChange={handleSelectAll}
                type="checkbox"
                id="selectAll"
                name="Select all"
                checked={selectAll}
              />
              <label htmlFor="selectAll">Select all</label>
            </div>
            {/*  */}
            <div className={css.wrapGroups}>
              <input
                onChange={handleSelectByRole}
                type="checkbox"
                id="adminsRoleCheck"
                name="admins"
                checked={selectAdmins}
              />
              <label htmlFor="adminsRoleCheck">Admins</label>
            </div>
            {select.admins.map((c, index) => (
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

            {/*  */}
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
          </>
        )}
      </div>
    </div>
  );
};

MultiSelectMobile.defaultProps = {
  globalUsers: {},
};

MultiSelectMobile.propTypes = {
  choiseUsersIds: PropTypes.arrayOf(PropTypes.any).isRequired,
  setChoiseUsersIds: PropTypes.func.isRequired,
  globalUsers: PropTypes.shape(PropTypes.any.isRequired),
};

export default MultiSelectMobile;
