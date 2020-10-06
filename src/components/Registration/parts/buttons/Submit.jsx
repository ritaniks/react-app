import React from 'react';

import css from './buttons.module.scss';

const Submit = ({ counClick, setCounClick }) => {
  const handleClick = () => {
    const newCount = counClick + 1;
    setCounClick(+newCount);
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
