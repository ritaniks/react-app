import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import Modal from 'react-modal';

import cssDefault from './MultiSelect.module.scss';

const tmp = [
  { name: 'Jonny', checked: false },
  { name: 'Tommy', checked: false },
  { name: 'Elis', checked: false },
  { name: 'Jack', checked: false },
  { name: 'Kate', checked: false },
  { name: 'Brovko', checked: false },
  { name: 'Pes', checked: false },
  { name: 'Jonny', checked: false },
  { name: 'Tommy', checked: false },
  { name: 'Elis', checked: false },
  { name: 'Jack', checked: false },
  { name: 'Kate', checked: false },
  { name: 'Brovko', checked: false },
  { name: 'Pes', checked: false },
  { name: 'Jonny', checked: false },
  { name: 'Tommy', checked: false },
  { name: 'Elis', checked: false },
  { name: 'Jack', checked: false },
  { name: 'Kate', checked: false },
  { name: 'Brovko', checked: false },
  { name: 'Pes', checked: false },
  { name: 'Jonny', checked: false },
  { name: 'Tommy', checked: false },
  { name: 'Elis', checked: false },
  { name: 'Jack', checked: false },
  { name: 'Kate', checked: false },
  { name: 'Brovko', checked: false },
  { name: 'Pes', checked: false },
  { name: 'Jonny', checked: false },
  { name: 'Tommy', checked: false },
  { name: 'Elis', checked: false },
  { name: 'Jack', checked: false },
  { name: 'Kate', checked: false },
  { name: 'Brovko', checked: false },
  { name: 'Pes', checked: false },
  { name: 'Jonny', checked: false },
  { name: 'Tommy', checked: false },
  { name: 'Elis', checked: false },
  { name: 'Jack', checked: false },
  { name: 'Kate', checked: false },
  { name: 'Brovko', checked: false },
  { name: 'Pes', checked: false },
  { name: 'Jonny', checked: false },
  { name: 'Tommy', checked: false },
  { name: 'Elis', checked: false },
  { name: 'Jack', checked: false },
  { name: 'Kate', checked: false },
  { name: 'Brovko', checked: false },
  { name: 'Pes', checked: false },
  { name: 'Jonny', checked: false },
  { name: 'Tommy', checked: false },
  { name: 'Elis', checked: false },
  { name: 'Jack', checked: false },
  { name: 'Kate', checked: false },
  { name: 'Brovko', checked: false },
  { name: 'Pes', checked: false },
  { name: 'Jonny', checked: false },
  { name: 'Tommy', checked: false },
  { name: 'Elis', checked: false },
  { name: 'Jack', checked: false },
  { name: 'Kate', checked: false },
  { name: 'Brovko', checked: false },
  { name: 'Pes', checked: false },
];

Modal.setAppElement('#root');

// eslint-disable-next-line no-unused-vars
const MultiSelect = ({ css = cssDefault, setIsStopOverflow }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isModal, setIsModal] = useState(false);
  //   const [select, setSelect] = useState(0);
  //   const [selectAll, setSelectAll] = useState([]);
  //   const [search, setSearch] = useState('');

  const handleToogle = () => {
    setIsOpen(!isOpen);
    setIsStopOverflow(false);
  };

  const handleStopOverflow = () => {
    setIsOpen(!isOpen);
    setIsStopOverflow(true);
  };

  //   const handleSelect = () => {
  //     console.log('select One');
  //   };
  //   const handleSelectAll = () => {
  //     console.log('select All');
  //   };
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
          <div className={cssDefault.wrapBgSelect}>
            <div className={cssDefault.wrapSelect}>
              <div>
                <input
                  type="text"
                  className={cssDefault.searchInput}
                  placeholder="Client name"
                  aria-label="Client name"
                  aria-describedby="button-addon2"
                  id="item"
                />
                <hr className={cssDefault.hr} />
              </div>
              <div className={cssDefault.wrapCheckBoxes}>
                <div className={cssDefault.wrapInput}>
                  <input type="checkbox" id="selectAllClient" name="clients" />
                  <label htmlFor="selectAllClient">Select ALL</label>
                  <hr className={cssDefault.hr} />
                </div>

                {tmp.map((c, index) => (
                  <div className={cssDefault.wrapInput} key={index}>
                    <input
                      type="checkbox"
                      id={`${c.name}-${index}`}
                      name={c.name}
                    />
                    <label htmlFor={`${c.name}-${index}`}>{c.name}</label>
                    <hr className={cssDefault.hr} />
                  </div>
                ))}
              </div>
              <div className={cssDefault.wrapBtn}>
                <button onClick={handleToogle} type="button">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* <select multiple="multiple" className={css.select}>
        <option onChange={handleSearch}>search</option>
        <optgroup label="Украинская кухня">
          <option onClick={handleSelectAll}>All</option>
        </optgroup>
        <option onClick={handleSelect}>11:00</option>
        <option onClick={handleSelect}>11:30</option>
        <option onClick={handleSelect}>12:00</option>
        <option onClick={handleSelect}>12:30</option>
      </select> */}

      <Helmet>
        <style>{`
              .modalMultiSelect {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border: 1px solid #ccc;
                    background: #fff;
                    overflow: auto;
                    border-radius: 0.25rem;
                    outline: none;
                    padding: 20px;
                    height: 100%;
                    width: 100%;
                    max-width: 800px;
              }

              .modalOverlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    // right: 0;
                    // bottom: 0;
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
