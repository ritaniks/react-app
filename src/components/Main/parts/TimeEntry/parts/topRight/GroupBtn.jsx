import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './GroupBtn.module.scss';

const BtnGroup = ({ checkBtn, setCheckBtn }) => {
  const handleClick = e => {
    setCheckBtn(e.target.id);
  };

  return (
    <div className="btn-group" data-toggle="buttons">
      <label
        onClick={handleClick}
        className={cn(
          checkBtn === 'period' ? `${css.active} btn ` : `${css.btn} btn `,
        )}
        type="button"
      >
        Period
        <input className={css.hide} type="radio" name="options" id="period" />
      </label>

      <label
        onClick={handleClick}
        className={cn(
          checkBtn === 'week' ? `${css.active} btn ` : `${css.btn} btn `,
        )}
      >
        Week
        <input className={css.hide} type="radio" name="options" id="week" />
      </label>
      <label
        onClick={handleClick}
        className={cn(
          checkBtn === 'day' ? `${css.active} btn ` : `${css.btn} btn `,
        )}
      >
        Day
        <input className={css.hide} type="radio" name="options" id="day" />
      </label>
    </div>
  );
};
BtnGroup.propTypes = {
  checkBtn: PropTypes.string.isRequired,
  setCheckBtn: PropTypes.func.isRequired,
};

export default BtnGroup;
