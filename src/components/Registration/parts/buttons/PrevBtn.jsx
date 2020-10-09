import React from 'react';

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

export default PrevBtn;
