import React from 'react';

import css from './CurrentDayBtn.module.scss';

const CurrentDayBtn = () => {
  return (
    <button type="button" className={`btn btn-light ${css.wrapBtn}`}>
      CurrentDay
      {/* or Week */}
    </button>
  );
};

export default CurrentDayBtn;
