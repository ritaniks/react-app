import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import Modal from 'react-modal';

import cssDefault from './MultiSelect.module.scss';

// this is select
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

Modal.setAppElement('#root');

// eslint-disable-next-line no-unused-vars
const MultiSelect = ({ css = cssDefault, setIsStopOverflow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState(tmp);
  //   const [search, setSearch] = useState('');

  const [selectAll, setSelectAll] = useState(false);
  const [selectManagers, setSelectManagers] = useState(false);
  const [selectUsers, setSelectUsers] = useState(false);
  const [selectItems, setCheckItems] = useState(0);

  // default props
  // let defautPropCount = 0;

  // helpers

  const handleToogle = () => {
    setIsOpen(!isOpen);
    setIsStopOverflow(false);
    // defautPropCount = 0;
  };

  const handleStopOverflow = () => {
    setIsOpen(!isOpen);
    setIsStopOverflow(true);
  };

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

  // button OK

  const counterChecks = () => {
    let defautPropCount = 0;
    // checkItems;
    // let countChecks = 0;
    // eslint-disable-next-line
    for (const user in select) {
      // console.log(user, 'el2');
      // console.log(select[user], 'select[user]');

      setSelectAll(false);
      setSelectManagers(false);
      setSelectUsers(false);
      // eslint-disable-next-line
      select[user].forEach((el, index) => {
        if (el.checked === true) {
          // const tmp = selectItems + 1;
          // setCheckItems(tmp);
          defautPropCount += 1;

          if (el.checked === true) {
            // eslint-disable-next-line no-param-reassign
            el.checked = false;
          }

          // TO DO by setSelect

          // console.log(el.role);

          // el[index].checked = false;
          // const checkRole = el.role;
          // console.log(checkRole, 'el.role');

          // setSelect({
          //   ...select,
          //   checkRole: console.log(select[checkRole][index], 'select.role'),
          //   // select.role.map(elem => console.log(elem, 'elem')),
          //   // console.log(role),
          //   // role.map(elem => {
          //   //   return { ...elem, checked: false };
          //   // }),
          // });

          // const selectTmp = select.find(el => {});
        }
      });
    }

    setCheckItems(defautPropCount);
    // console.log(
    //   defautPropCount,
    //   defautPropCount > 1 ? 'check items' : 'check item',
    // );
  };

  const handleOk = () => {
    // count checks
    counterChecks();

    handleToogle();
  };

  return (
    <>
      <button
        onClick={handleStopOverflow}
        className={cssDefault.btn}
        type="button"
      >
        {selectItems > 0 ? `${selectItems} item(s)` : 'Add client'}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleToogle}
        contentLabel="My dialog"
        className="modalMultiSelect"
        overlayClassName="modalOverlay"
        closeTimeoutMS={100}
      >
        {isOpen && (
          <div className={cssDefault.wrapSelect}>
            <div className={cssDefault.wrapCheckBoxes}>
              <div className={cssDefault.wrapGroups}>
                <input
                  onChange={handleSelectAll}
                  type="checkbox"
                  id="selectAllUsers"
                  name="Select all"
                  checked={selectAll}
                />
                <label htmlFor="selectAllUsers">Select all</label>
              </div>

              <div className={cssDefault.wrapSearch}>
                <input
                  type="text"
                  className={cssDefault.searchInput}
                  placeholder="Search ..."
                  aria-label="Client name"
                  aria-describedby="button-addon2"
                  id="item"
                />
              </div>

              <div className={cssDefault.wrapGroups}>
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
                <div className={cssDefault.wrapInput} key={index}>
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

              <div className={cssDefault.wrapGroups}>
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
                <div className={cssDefault.wrapInput} key={index}>
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
            <div className={cssDefault.wrapBtn}>
              <button
                className={cssDefault.btnClose}
                onClick={handleToogle}
                type="button"
              >
                CANCEL
              </button>
              <button
                className={cssDefault.btnClose}
                onClick={handleOk}
                type="button"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </Modal>
      <Helmet>
        <style>{`
              .modalMultiSelect {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: #fff;
                    overflow: auto;
                    outline: none;
                    height: 100%;
                    width: 100%;
              }

              .modalOverlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.005);
                    z-index: 1;
              }

      
      `}</style>
      </Helmet>
    </>
  );
};
MultiSelect.propTypes = {
  css: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  setIsStopOverflow: PropTypes.func.isRequired,
};

export default MultiSelect;
