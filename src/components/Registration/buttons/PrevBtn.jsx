import React from 'react';
import PropTypes from 'prop-types';

import css from './buttons.module.scss';

const PrevBtn = ({ countClick, setCountClick }) => {
  const handleClick = () => {
    const newCount = countClick - 1;
    setCountClick(+newCount);
  };
  return (
    <button
      onClick={handleClick}
      className={`${css.btnPrev} ${css.buttons} previous`}
      type="button"
    >
      Previous
    </button>
  );
};

PrevBtn.propTypes = {
  countClick: PropTypes.number.isRequired,
  setCountClick: PropTypes.func.isRequired,
};

export default PrevBtn;
