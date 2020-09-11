import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ChartIcon } from '../../../../../../assets/img/main/chart-btn.svg';

import css from './ChartBtn.module.scss';

const ChartBtn = ({ handleChartBtn, isChartOpen }) => {
  return (
    <button
      onClick={handleChartBtn}
      type="button"
      className={`btn btn-primary ${css.wrapBtn}`}
    >
      <p>{isChartOpen ? 'Hide' : 'Show'}</p>

      <div className={css.wrapIcon}>
        <ChartIcon />
      </div>
    </button>
  );
};

ChartBtn.propTypes = {
  handleChartBtn: PropTypes.func.isRequired,
  isChartOpen: PropTypes.bool.isRequired,
};

export default ChartBtn;
