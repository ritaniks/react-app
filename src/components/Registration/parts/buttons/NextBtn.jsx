import React from 'react';

import css from './buttons.module.scss';

const NextBtn = ({ counClick, setCounClick }) => {
  const handleClick = () => {
    const newCount = counClick + 1;
    setCounClick(+newCount);
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

export default NextBtn;
