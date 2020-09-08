import React from 'react';
import PropTypes from 'prop-types';

import css from './ChartBtn.module.scss';

const ChartBtn = ({ handleCartBtn, isChartOpen }) => {
  return (
    <button
      onClick={handleCartBtn}
      type="button"
      className={`btn btn-primary ${css.wrapBtn}`}
    >
      ChartBtn
    </button>
  );
};

ChartBtn.propTypes = {
  handleCartBtn: PropTypes.func.isRequired,
  isChartOpen: PropTypes.bool.isRequired,
};

export default ChartBtn;
