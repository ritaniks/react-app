import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Calendar } from '../../../../../../assets/img/main/calendar.svg';

import css from './CurrentDayBtn.module.scss';

const CurrentDayBtn = ({ checkBtn }) => {
  return (
    <button type="button" className={`btn ${css.wrapBtn}`}>
      <div className={css.wrapIcon}>
        <Calendar />
      </div>

      {/* {checkBtn === 'week' && <p>CurrentWeek</p>}
      {checkBtn === 'day' && <p>CurrentDay</p>}
      {checkBtn === 'period' && <p>CurrentPeriod</p>} */}
    </button>
  );
};

CurrentDayBtn.propTypes = {
  checkBtn: PropTypes.string.isRequired,
};

export default CurrentDayBtn;
