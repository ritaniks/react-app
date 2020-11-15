import React from 'react';
import PropTypes from 'prop-types';

import css from './buttons.module.scss';

const Submit = ({ countClick, setCountClick }) => {
  const handleClick = () => {
    const newCount = countClick + 1;
    setCountClick(+newCount);
  };
  return (
    <button
      onClick={handleClick}
      className={`${css.btnSubmit} ${css.buttons} next`}
      type="button"
    >
      Submit
    </button>
  );
};

Submit.propTypes = {
  countClick: PropTypes.number.isRequired,
  setCountClick: PropTypes.func.isRequired,
};

export default Submit;
