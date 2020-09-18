import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment';
import Helmet from 'react-helmet';
import CurrentDayBtn from './CurrentDayBtn';

// import { ReactComponent as ArrowL } from '../../../../../../assets/img/main/arrows/chevron-left.svg';
// import { ReactComponent as ArrowR } from '../../../../../../assets/img/main/arrows/chevron-right.svg';
// import { ReactComponent as Calendar } from '../../../../../../assets/img/main/calendar.svg';

import css from './PeriodPicker.module.scss';

const PeriodPicker = ({ setSelectedDate, checkBtn }) => {
  // widthDivice = 320,
  const node = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [enteredTo, setEnteredTo] = useState(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    setSelectedDate(moment(new Date()).format('MMM Do'));
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!from) {
      return;
    }
    setSelectedDate(moment(from).format('MMM Do'));
    // eslint-disable-next-line
  }, [from]);

  useEffect(() => {
    if (!enteredTo) {
      return;
    }
    const parseDate = `${moment(from).format('MMM Do')} – ${moment(
      enteredTo,
    ).format('MMM Do')}`;
    setSelectedDate(parseDate);
    // eslint-disable-next-line
  }, [enteredTo]);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  // select range date logic
  const isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  };

  const handleDayMouseEnter = day => {
    if (!isSelectingFirstDay(from, to, day)) {
      setEnteredTo(day);
    }
  };

  const handleResetClick = () => {
    setFrom(null);
    setTo(null);
    setEnteredTo(null);
  };

  const handleDayClick = day => {
    if (from && to && day >= from && day <= to) {
      handleResetClick();
      return;
    }
    if (isSelectingFirstDay(from, to, day)) {
      setFrom(day);
      setTo(null);
      setEnteredTo(null);
    } else {
      // setFrom(null);
      setTo(day);
      setEnteredTo(day);
      setIsOpen(false);
    }
  };

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrentPeriod = () => {
    setSelectedDate(moment(new Date()).format('MMM Do'));
    setIsOpen(false);
    setFrom(null);
    setTo(null);
    setEnteredTo(null);
  };

  const modifiers = { start: from, end: enteredTo };
  const disabledDays = { before: from };
  const selectedDays = [from, { from, to: enteredTo }];

  return (
    <>
      <div ref={node} className={css.wrapPeriodPicker}>
        {/* <div
          className={`btn-group ${css.wrapGroup}`}
          role="group"
          aria-label="Basic example"
        > */}
        {/* <button
            onClick={handleBackDay}
            type="button"
            className={`btn btn-light ${css.wrapIcon}`}
          >
            <ArrowL />
          </button> */}

        {/* {widthDivice < 900 ? (
          <button
            onClick={handleToogle}
            type="button"
            className={`btn btn-light ${css.wrapIcon}`}
          >
            <Calendar />
          </button>
        ) : (
          <button
            onClick={handleToogle}
            type="button"
            className={`btn btn-light ${css.wrapIcon} ${css.date}`}
          >
            сonvertDate 
          </button>
        )} */}

        <button
          onClick={handleToogle}
          type="button"
          className={`btn btn-light ${css.date}`} // ${css.wrapIcon}
        >
          Period Date
        </button>

        <CurrentDayBtn onClick={handleCurrentPeriod} checkBtn={checkBtn} />

        {/* <button
            onClick={handleNextDay}
            type="button"
            className={`btn btn-light ${css.wrapIcon}`}
          >
            <ArrowR />
          </button> */}
        {/* </div> */}

        {isOpen && (
          <>
            <DayPicker
              className={`${css.periodPicker} Range`}
              // numberOfMonths={2}
              fromMonth={from}
              selectedDays={selectedDays}
              disabledDays={disabledDays}
              modifiers={modifiers}
              onDayClick={handleDayClick}
              onDayMouseEnter={handleDayMouseEnter}
            />
            {/* <div>
              {!from && !to && 'Please select the first day.'}
              {from && !to && 'Please select the last day.'}
              {from &&
                to &&
                `Selected from ${from.toLocaleDateString()} to
          ${to.toLocaleDateString()}`}{' '}
              {from && to && (
                <button className="link" onClick={handleResetClick}>
                  Reset
                </button>
              )}
            </div> */}
          </>
        )}

        <Helmet>
          <style>{`
                .Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                      background-color: #f0f8ff !important;
                      color: #4a90e2;
                }
                .Range .DayPicker-Day {
                      border-radius: 0 !important;
                }
                .Range .DayPicker-Months {
                  background-color: #F8F9FA;
                  border: 1px solid lightgray;
                  border-radius: 0.25rem;
                }
        `}</style>
        </Helmet>
      </div>
    </>
  );
};

PeriodPicker.propTypes = {
  // checkBtn: PropTypes.string.isRequired,
  // widthDivice: PropTypes.number,
  setSelectedDate: PropTypes.func.isRequired,
};

export default PeriodPicker;
