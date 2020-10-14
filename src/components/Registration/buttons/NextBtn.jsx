import React from 'react';

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

export default NextBtn;
