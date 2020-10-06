import React, { useEffect } from 'react';

import css from './buttons.module.scss';

const NextBtn = ({ counClick, setCounClick }) => {
  const handleClick = e => {
    const newCount = counClick + 1;
    setCounClick(+newCount);
  };

  //   useEffect(() => {
  //     // const newCount = +1;
  //     // console.log(counClick, '2');
  //     // setCounClick(+newCount);
  //   }, [counClick]);

  return (
    <button
      onClick={handleClick}
      className={`${css.btnNext} ${css.buttons} next`}
      type="button"
    >
      NextBtn
    </button>
  );
};

export default NextBtn;
