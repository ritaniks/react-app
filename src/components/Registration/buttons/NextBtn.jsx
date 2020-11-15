import React from 'react';
import PropTypes from 'prop-types';

import css from './buttons.module.scss';

const NextBtn = ({ countClick, setCountClick }) => {
  const handleClick = () => {
    const newCount = countClick + 1;
    setCountClick(+newCount);
  };

  return (
    <button
      onClick={handleClick}
      className={`${css.btnNext} ${css.buttons} next`}
      type="button"
    >
      Next
    </button>
  );
};

NextBtn.propTypes = {
  countClick: PropTypes.number.isRequired,
  setCountClick: PropTypes.func.isRequired,
};

export default NextBtn;
