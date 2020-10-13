import React, { useState } from 'react';
import PropTypes from 'prop-types';

import cssDefault from './MultiSelect.module.scss';

// eslint-disable-next-line no-unused-vars
const MultiSelect = ({ css = cssDefault }) => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [select, setSelect] = useState(0);
  //   const [selectAll, setSelectAll] = useState([]);
  //   const [search, setSearch] = useState('');

  const handleToogle = () => {
    setIsOpen(!isOpen);
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
      <button onClick={handleToogle} className={cssDefault.btn} type="button">
        Add client
      </button>
      {isOpen && (
        <div className={cssDefault.wrapBgSelect}>
          <div className={cssDefault.wrapSelect}>
            <div>Search</div>
            <div>Select ALL checkBoxe</div>
            <div>multi lelect checkBoxes</div>
            <div>buttons</div>
          </div>
        </div>
      )}

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

      {/* <input
                type="text"
                // className="form-control"
                placeholder="Client name"
                aria-label="Client name"
                aria-describedby="button-addon2"
                id="item"
                /> */}
    </>
  );
};
MultiSelect.propTypes = {
  css: PropTypes.shape(PropTypes.string.isRequired).isRequired,
};

export default MultiSelect;
