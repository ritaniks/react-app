import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import Modal from 'react-modal';

import cssDefault from './MultiSelect.module.scss';

// this is select
const tmp = {
  selectAll: [{ name: 'selectAll', checked: false, role: 'selectAll' }],
  manegers: [
    { name: 'Jack', checked: false, role: 'manegers' },
    { name: 'Kate', checked: true, role: 'manegers' },
  ],

  users: [
    { name: 'Elis', checked: false, role: 'users' },
    { name: 'Jonny', checked: true, role: 'users' },
    { name: 'Tommy', checked: false, role: 'users' },
    { name: 'Elis1', checked: false, role: 'users' },
    { name: 'Jonny1', checked: true, role: 'users' },
    { name: 'Tommy1', checked: false, role: 'users' },
  ],
};

Modal.setAppElement('#root');

// eslint-disable-next-line no-unused-vars
const MultiSelect = ({ css = cssDefault, setIsStopOverflow }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isModal, setIsModal] = useState(false);
  // const [select, setSelect] = useState(false);
  const [select, setSelect] = useState(tmp);
  //   const [search, setSearch] = useState('');

  const handleToogle = () => {
    setIsOpen(!isOpen);
    setIsStopOverflow(false);
  };

  const handleStopOverflow = () => {
    setIsOpen(!isOpen);
    setIsStopOverflow(true);
  };

  const handleSelect = e => {
    // console.log(e.target.checked, 'select');
    // console.dir(e.target.name, 'select');
    // console.dir(e.target.attributes.role.value);
    const selecRole = e.target.attributes.role.value;
    // const userNameSelected = e.target.name;

    if (selecRole === 'selectAll') {
      const isCheckAll = select.selectAll[0].checked;
      setSelect({
        ...select,
        [selecRole]: select[selecRole].map(el => {
          return { ...el, checked: !el.checked };
        }),
        manegers: select.manegers.map(el => {
          return { ...el, checked: !isCheckAll };
        }),
        users: select.users.map(el => {
          return { ...el, checked: !isCheckAll };
        }),
      });
    } else {
      // to do unselect selectAll(false)
      setSelect({
        ...select,
        [selecRole]: select[selecRole].map(el => {
          if (el.name === e.target.name) {
            return { ...el, checked: !el.checked };
          }
          return el;
        }),
        selectAll: select.selectAll.map(el => {
          return { ...el, checked: false };
        }),
      });
    }
  };

  const handleSelectByRole = e => {
    console.log(e.target, 'handleSelectByRole -> e.target');
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
                <label htmlFor={`${select.selectAll[0].name}--`}>
                  {select.selectAll[0].name}
                </label>
                <input
                  onChange={handleSelect}
                  type="checkbox"
                  id={`${select.selectAll[0].name}--`}
                  name={select.selectAll[0].name}
                  checked={select.selectAll[0].checked}
                  role={select.selectAll[0].role}
                />
              </div>

              <div className={cssDefault.wrapRole}>
                <label htmlFor="menegersRoleCheck">Managers</label>
                <input
                  onChange={handleSelectByRole}
                  type="checkbox"
                  id="menegersRoleCheck"
                  name="Managers"
                />
              </div>

              {select.manegers.map((c, index) => (
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
                <label htmlFor="menegersRoleCheck">Users</label>
                <input
                  onChange={handleSelectByRole}
                  type="checkbox"
                  id="usersRoleCheck"
                  name="Users"
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
                onClick={handleToogle}
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
