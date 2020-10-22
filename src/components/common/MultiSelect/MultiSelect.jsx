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
  ],

  users: [
    { name: 'Elis', checked: false, role: 'users' },
    { name: 'Jonny', checked: false, role: 'users' },
    { name: 'Tommy', checked: false, role: 'users' },
    { name: 'Elis1', checked: false, role: 'users' },
    { name: 'Jonny1', checked: false, role: 'users' },
    { name: 'Tommy1', checked: false, role: 'users' },
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

  // default props
  let defautPropCount = 0;

  // helpers

  const handleToogle = () => {
    setIsOpen(!isOpen);
    setIsStopOverflow(false);
    defautPropCount = 0;
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
    // let countChecks = 0;
    // eslint-disable-next-line
    for (const user in select) {
      console.log(user, 'el2');
      // eslint-disable-next-line
      select[user].forEach((el, index) => {
        if (el.checked === true) {
          defautPropCount += defautPropCount;

          console.log(el);

          // el[index].checked = false;

          // setSelect({
          //   ...select,
          //   users: select.users.map(el => {
          //     return { ...el, checked: !selectUsers };
          //   }),
          // });

          // const selectTmp = select.find(el => {});
        }
      });
    }
  };

  const handleOk = () => {
    // count checks
    counterChecks();

    console.log(
      defautPropCount,
      defautPropCount > 1 ? 'check items' : 'check item',
    );

    handleToogle();
  };

  return (
    <>
      <button
        onClick={handleStopOverflow}
        className={cssDefault.btn}
        type="button"
      >
        Add client
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
            <div className={cssDefault.wrapSearch}>
              <input
                type="text"
                className={cssDefault.searchInput}
                placeholder="Client name"
                aria-label="Client name"
                aria-describedby="button-addon2"
                id="item"
              />
            </div>
            <div className={cssDefault.wrapCheckBoxes}>
              <div className={cssDefault.wrapInput}>
                <label htmlFor="selectAllUsers">Select all</label>
                <input
                  onChange={handleSelectAll}
                  type="checkbox"
                  id="selectAllUsers"
                  name="Select all"
                  checked={selectAll}
                />
              </div>

              <div className={cssDefault.wrapRole}>
                <label htmlFor="menegersRoleCheck">Managers</label>
                <input
                  onChange={handleSelectByRole}
                  type="checkbox"
                  id="menegersRoleCheck"
                  name="managers"
                  checked={selectManagers}
                />
              </div>

              {select.managers.map((c, index) => (
                <div className={cssDefault.wrapInput} key={index}>
                  <label htmlFor={`${c.name}-${index}`}>{c.name}</label>
                  <input
                    onChange={handleSelect}
                    type="checkbox"
                    id={`${c.name}-${index}`}
                    name={c.name}
                    checked={c.checked}
                    role={c.role}
                  />
                </div>
              ))}

              <div className={cssDefault.wrapRole}>
                <label htmlFor="usersRoleCheck">Users</label>
                <input
                  onChange={handleSelectByRole}
                  type="checkbox"
                  id="usersRoleCheck"
                  name="users"
                  checked={selectUsers}
                />
              </div>

              {select.users.map((c, index) => (
                <div className={cssDefault.wrapInput} key={index}>
                  <label htmlFor={`${c.name}-${index}`}>{c.name}</label>
                  <input
                    onChange={handleSelect}
                    type="checkbox"
                    id={`${c.name}-${index}`}
                    name={c.name}
                    checked={c.checked}
                    role={c.role}
                  />
                </div>
              ))}
            </div>
            <div className={cssDefault.wrapBtn}>
              <button
                className={cssDefault.btnClose}
                onClick={handleToogle}
                type="button"
              >
                Cancel
              </button>
              <button
                className={cssDefault.btnClose}
                onClick={handleOk}
                type="button"
              >
                Ok
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
