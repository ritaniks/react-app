import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './GroupBtn.module.scss';

const BtnGroup = ({ checkBtn, setCheckBtn }) => {
  const handleClick = e => {
    setCheckBtn(e.target.id);
  };

  return (
    <div className={css.groupBtn} data-toggle="buttons">
      <label
        onClick={handleClick}
        className={cn(
          checkBtn === 'period'
            ? `${css.btn} ${css.active} ${css.leftBtn}`
            : `${css.btn} ${css.leftBtn}`,
        )}
        type="button"
      >
        Period
        <input className={css.hide} type="radio" name="options" id="period" />
      </label>

      <label
        onClick={handleClick}
        className={cn(
          checkBtn === 'week' ? `${css.btn} ${css.active} ` : css.btn,
        )}
      >
        Week
        <input className={css.hide} type="radio" name="options" id="week" />
      </label>
      <label
        onClick={handleClick}
        className={cn(
          checkBtn === 'day'
            ? `${css.btn} ${css.active} ${css.rightBtn}`
            : `${css.btn} ${css.rightBtn}`,
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
