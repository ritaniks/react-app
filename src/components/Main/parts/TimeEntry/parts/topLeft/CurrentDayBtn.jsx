import React from 'react';

import css from './CurrentDayBtn.module.scss';

const CurrentDayBtn = () => {
  return (
    <button type="button" className={`btn ${css.wrapBtn}`}>
      CurrentDay
      {/* or Week */}
    </button>
  );
};

export default CurrentDayBtn;
