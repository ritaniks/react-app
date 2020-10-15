import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import Modal from 'react-modal';

import cssDefault from './MultiSelect.module.scss';

const tmp = {
  manegers: [
    { name: 'Tom', checked: false, role: 'manegers' },
    { name: 'Jack', checked: false, role: 'manegers' },
    { name: 'Kate', checked: true, role: 'manegers' },
  ],
  workers: [
    { name: 'Elis', checked: false, role: 'workers' },
    { name: 'Jonny', checked: true, role: 'workers' },
    { name: 'Tommy', checked: false, role: 'workers' },
  ],
};

Modal.setAppElement('#root');

// eslint-disable-next-line no-unused-vars
const MultiSelect = ({ css = cssDefault, setIsStopOverflow }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isModal, setIsModal] = useState(false);
  // const [select, setSelect] = useState(false);
  const [selectAll, setSelectAll] = useState([]);
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
    const userNameSelected = e.target.name;

    const oneUser = tmp.manegers.map(el => {
      // (el.name === userNameSelected ? index : 'ok'),
      // console.log(index, 'ind');
      // console.log(el.name, 'el');
      // console.log(userNameSelected, 'userNameSelected');
      // console.log(index, 'ind');

      if (el.name === userNameSelected) {
        // (el.checked = !el.checked)
        return;
      }
      return;
    });
    console.log(oneUser, 'oneUser');
    // tmp.workers.find();

    // setSelect(e.target.checked);
    // console.log('select One');
  };
  const handleSelectAll = e => {
    setSelectAll(e.target.checked);
    // console.log(e.target.checked, 'select All');
    // console.dir(e.target.checked, 'select All');
    // console.log('select All');
  };
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
                  onChange={handleSelectAll}
                  type="checkbox"
                  id="selectAllClient"
                  name="clients"
                />
                <label htmlFor="selectAllClient">Select ALL</label>
              </div>
              <p className={cssDefault.userRole}>Menagers</p>
              {tmp.manegers.map((c, index) => (
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
              <p className={cssDefault.userRole}>Workers</p>
              {tmp.workers.map((c, index) => (
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
