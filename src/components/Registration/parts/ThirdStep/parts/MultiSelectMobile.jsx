import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getUserIdsArr from './helpersMultiSelect';

import css from './MultiSelectMobile.module.scss';

const MultiSelectMobile = ({
  setSelectUsersIds,
  selectUsersIds,
  select,
  setSelect,
  // globalUsers,
}) => {
  // const [select, setSelect] = useState(globalUsers);
  const [selectAll, setSelectAll] = useState(false);
  const [selectAdmins, setSelectAdmins] = useState(false);
  const [selectManagers, setSelectManagers] = useState(false);
  const [selectUsers, setSelectUsers] = useState(false);

  useEffect(() => {
    const keys = Object.keys(select);
    if (selectUsersIds) {
      keys.map(role => {
        select[role].map(el => {
          if (selectUsersIds.includes(el.id)) {
            // eslint-disable-next-line no-param-reassign
            el.checked = true;
          } else {
            // eslint-disable-next-line no-param-reassign
            el.checked = false;
          }

          return '';
        });

        return '';
      });
    } else {
      // eslint-disable-next-line array-callback-return
      keys.map(role => {
        // eslint-disable-next-line array-callback-return
        select[role].map(el => {
          // eslint-disable-next-line no-param-reassign
          el.checked = false;
        });
      });
    }
  }, []);

  useEffect(() => {
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

    //  select ALL (users & managers & admins)
    if (isSelectAllAdmin || isSelectAllManager || isSelectAllUsers) {
      setSelectAll(false);
    }
    if (isSelectAllAdmin && isSelectAllManager && isSelectAllUsers) {
      setSelectAll(true);
    }

    const newUserIdsArr = getUserIdsArr(select);

    setSelectUsersIds(newUserIdsArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select]);

  const handleSelect = e => {
    const selecRole = e.target.attributes.role.value;

    setSelect({
      ...select,

      [selecRole]: select[selecRole].map(el => {
        if (el.name === e.target.name) {
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
    const roleTmp = e.target.name;

    if (roleTmp === 'admins') {
      setSelectAdmins(!selectAdmins);

      setSelect({
        ...select,

        admins: select.admins.map(el => {
          return { ...el, checked: !selectAdmins };
        }),
      });
    }

    if (roleTmp === 'managers') {
      setSelectManagers(!selectManagers);

      setSelect({
        ...select,

        managers: select.managers.map(el => {
          return { ...el, checked: !selectManagers };
        }),
      });
    }

    if (roleTmp === 'users') {
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
  // globalUsers: {},
  selectUsersIds: undefined,
  select: undefined,
};

MultiSelectMobile.propTypes = {
  selectUsersIds: PropTypes.arrayOf(PropTypes.any),
  setSelectUsersIds: PropTypes.func.isRequired,

  // globalUsers: PropTypes.shape(PropTypes.any.isRequired),
  select: PropTypes.objectOf(PropTypes.any),
  setSelect: PropTypes.func.isRequired,
};

export default MultiSelectMobile;
