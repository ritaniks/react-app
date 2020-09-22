import React from 'react';
import PropTypes from 'prop-types';

import css from './CurrentDayBtn.module.scss';

const CurrentDayBtn = ({ checkBtn, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={`${css.btn}`}>
      {checkBtn === 'week' && <p>Jump to Current Week</p>}
      {checkBtn === 'day' && <p>Jump to Current Day</p>}
      {checkBtn === 'period' && <p>Jump to Current Period</p>}
    </button>
  );
};

CurrentDayBtn.propTypes = {
  checkBtn: PropTypes.string.isRequired,
};

export default CurrentDayBtn;
