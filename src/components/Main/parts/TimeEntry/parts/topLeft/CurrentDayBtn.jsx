import React from 'react';
import PropTypes from 'prop-types';

import css from './CurrentDayBtn.module.scss';

const CurrentDayBtn = ({ checkBtn }) => {
  return (
    <button type="button" className={`order-sm-1 btn ${css.wrapBtn}`}>
      {checkBtn === 'week' && <p>Current Week</p>}
      {checkBtn === 'day' && <p>Current Day</p>}
      {checkBtn === 'period' && <p>Current Period</p>}
    </button>
  );
};

CurrentDayBtn.propTypes = {
  checkBtn: PropTypes.string.isRequired,
};

export default CurrentDayBtn;
