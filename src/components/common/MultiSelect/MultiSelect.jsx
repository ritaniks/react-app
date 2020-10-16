import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import Modal from 'react-modal';

import cssDefault from './MultiSelect.module.scss';

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
  const [selectAll, setSelectAll] = useState(tmp);
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
      // let isCheckAll = true;
      setSelectAll({
        ...selectAll,
        [selecRole]: selectAll[selecRole].map(el => {
          return { ...el, checked: !el.checked };
        }),
      });
    } else {
      setSelectAll({
        ...selectAll,
        [selecRole]: selectAll[selecRole].map(el => {
          if (el.name === e.target.name) {
            return { ...el, checked: !el.checked };
          }
          return el;
        }),
      });
    }
  };
  const handleSelectAll = e => {
    // console.log(e.target.checked, 'select');
    // console.dir(e.target.name, 'select');
    console.dir(e.target, 'target handleSelectAll');
    // console.dir(e.target.attributes.role.value);
    // console.log(selectAll, 'selectAll');
    // setSelectAll({
    //   selectAll: { name, checked: true },
    // });
    // setSelectAll(e.target.checked);
    // console.log(e.target.checked, 'select All');
    // console.dir(e.target.checked, 'select All');
    // console.log('select All');
  };

  // useEffect(() => {
  //   let all = selectAll.selectAll[0];
  // }, []);

  console.log(selectAll, 'SelectAll');
  //   const handleSearch = () => {};
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
                <input
                  onChange={handleSelect}
                  type="checkbox"
                  id={`${selectAll.selectAll[0].name}--`}
                  name={selectAll.selectAll[0].name}
                  checked={selectAll.selectAll[0].checked}
                  role={selectAll.selectAll[0].role}
                />
                <label htmlFor={`${selectAll.selectAll[0].name}--`}>
                  {selectAll.selectAll[0].name}
                </label>
              </div>

              <p className={cssDefault.userRole}>Managers</p>

              {selectAll.manegers.map((c, index) => (
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

              <p className={cssDefault.userRole}>Users</p>
              {selectAll.users.map((c, index) => (
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
