import React from 'react';

import css from './buttons.module.scss';

const PrevBtn = ({ counClick, setCounClick }) => {
  const handleClick = () => {
    const newCount = counClick - 1;
    setCounClick(+newCount);
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

export default PrevBtn;
