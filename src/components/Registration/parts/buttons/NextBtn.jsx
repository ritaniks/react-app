import React from 'react';

import css from './buttons.module.scss';

const NextBtn = () => {
  return (
    <button className={`${css.btnNext} ${css.buttons} next`} type="button">
      NextBtn
    </button>
  );
};

export default NextBtn;
