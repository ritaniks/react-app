import React, { useEffect, useState, useRef } from 'react';
import DayPicker from 'react-day-picker';
import moment from 'moment';
import CurrentDayBtn from './CurrentDayBtn';
import Helmet from 'react-helmet';
// import { ReactComponent as Calendar } from '../../../../../assets/img/main/calendar.svg';
import { ReactComponent as ArrowL } from '../../../../../../assets/img/main/arrows/chevron-left.svg';
import { ReactComponent as ArrowR } from '../../../../../../assets/img/main/arrows/chevron-right.svg';
import css from './OneDayPicker.module.scss';

const OneDayPicker = () => {
  const node = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date());

  const convertDate = moment(selectedDay).format('ll');

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [selectedDay]);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = data => {
    setIsOpen(!isOpen);
    setSelectedDay(data);
  };

  const handleBackDay = () => {
    const yesterday = moment(selectedDay).subtract(1, 'days')._d;
    setSelectedDay(yesterday);
  };

  const handleNextDay = () => {
    const tomorrow = moment(selectedDay).add(1, 'days')._d;
    setSelectedDay(tomorrow);
  };

  return (
    <>
      <div ref={node} className={css.wrapDayPicker}>
        <div
          className={`btn-group ${css.wrapGroup}`}
          role="group"
          aria-label="Basic example"
        >
          <button
            onClick={handleBackDay}
            type="button"
            className={`btn btn-light ${css.wrapIcon}`}
          >
            <ArrowL />
          </button>
          <button
            onClick={handleToogle}
            type="button"
            className={`btn btn-light ${css.wrapIcon} ${css.date}`}
          >
            {convertDate}
          </button>
          <button
            onClick={handleNextDay}
            type="button"
            className={`btn btn-light ${css.wrapIcon}`}
          >
            <ArrowR />
          </button>
        </div>
        <CurrentDayBtn />

        {isOpen && (
          <DayPicker
            className={css.dayPicker}
            initialMonth={selectedDay}
            selectedDays={selectedDay}
            showWeekNumbers
            showOutsideDays
            onDayClick={handleChange}
          />
        )}
      </div>
      <Helmet>
        <style>{`
  
      .DayPicker-Months{
        background-color: #F8F9FA;
        border: 1px solid lightgray;
        border-radius: 0.25rem;
      }
    `}</style>
      </Helmet>
    </>
  );
};

export default OneDayPicker;
