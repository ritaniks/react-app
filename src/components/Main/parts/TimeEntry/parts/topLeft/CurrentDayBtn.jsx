import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Calendar } from '../../../../../../assets/img/main/calendar.svg';

import css from './CurrentDayBtn.module.scss';

const CurrentDayBtn = ({ checkBtn }) => {
  return (
    <button type="button" className={`btn ${css.wrapBtn}`}>
      {/* <div className={css.wrapIcon}> 
        <Calendar />
      </div> */}

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
