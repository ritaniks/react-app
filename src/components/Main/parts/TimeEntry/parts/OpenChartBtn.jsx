import React from 'react';

import css from './OpenChartBtn.module.scss';

const OpenChartBtn = () => {
  return (
    <button type="button" className={`btn btn-primary ${css.wrapBtn}`}>
      ChartBtn
    </button>
  );
};

export default OpenChartBtn;
