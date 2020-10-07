import React from 'react';

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

export default Submit;
