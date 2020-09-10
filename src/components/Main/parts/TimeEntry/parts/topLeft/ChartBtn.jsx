import React from 'react';
import PropTypes from 'prop-types';

import css from './ChartBtn.module.scss';

const ChartBtn = ({ handleChartBtn, isChartOpen }) => {
  return (
    <button
      onClick={handleChartBtn}
      type="button"
      className={`btn btn-primary ${css.wrapBtn}`}
    >
      {isChartOpen ? 'Hide' : 'Show'}
    </button>
  );
};

ChartBtn.propTypes = {
  handleChartBtn: PropTypes.func.isRequired,
  isChartOpen: PropTypes.bool.isRequired,
};

export default ChartBtn;
