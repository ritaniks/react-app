import React, { useEffect, useState, useRef } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import CurrentDayBtn from '../topLeft/CurrentDayBtn';

import { ReactComponent as ArrowL } from '../../../../../../assets/img/main/arrows/chevron-left.svg';
import { ReactComponent as ArrowR } from '../../../../../../assets/img/main/arrows/chevron-right.svg';

import css from './WeekPicker.module.scss';
import 'react-day-picker/lib/style.css';

// helpers
function getWeekDays(weekStart) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(moment(weekStart).add(i, 'days').toDate());
  }
  return days;
}

function getWeekRange(date) {
  return {
    from: moment(date).startOf('week').toDate(),
    to: moment(date).endOf('week').toDate(),
  };
}

const WeekPicker2 = () => {
  const node = useRef();
  const [hoverRange, setHoverRange] = useState(undefined);
  const [selectedDays, setSelectedDays] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const daysAreSelected = selectedDays.length > 0;

  const modifiers = {
    hoverRange,
    selectedRange: daysAreSelected && {
      from: selectedDays[0],
      to: selectedDays[6],
    },
    hoverRangeStart: hoverRange && hoverRange.from,
    hoverRangeEnd: hoverRange && hoverRange.to,
    selectedRangeStart: daysAreSelected && selectedDays[0],
    selectedRangeEnd: daysAreSelected && selectedDays[6],
  };

  useEffect(() => {
    setSelectedDays(getWeekDays(getWeekRange(new Date()).from));

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line
  }, [selectedDays]);

  // close outside click
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(true);
    setIsOpen(false);
  };

  const handleDayChange = date => {
    setSelectedDays(getWeekDays(getWeekRange(date).from));
  };

  const handleDayEnter = date => {
    setHoverRange(getWeekRange(date));
  };

  const handleDayLeave = () => {
    setHoverRange(undefined);
  };

  const handleWeekClick = (weekNumber, days, e) => {
    setSelectedDays(days);
  };
  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  // handlers for week-arrows
  const handlePrevWeek = () => {
    const prevWeekStart = moment(selectedDays[0]).subtract(7, 'days')._d;

    const newSelectedDays = getWeekDays(getWeekRange(prevWeekStart).from);
    setSelectedDays(newSelectedDays);
  };

  const handleNextWeek = () => {
    const nextWeekStart = moment(selectedDays[0]).add(7, 'days')._d;

    const newSelectedDays = getWeekDays(getWeekRange(nextWeekStart).from);
    setSelectedDays(newSelectedDays);
  };

  return (
    <div ref={node} className={`${css.wrapWeekPicker} SelectedWeek`}>
      <div
        className={`btn-group ${css.wrapCalendar}`}
        role="group"
        aria-label="Basic example"
      >
        <button
          onClick={handlePrevWeek}
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
          {moment(selectedDays[0]).format('MMM D')} –{' '}
          {moment(selectedDays[6]).format('ll')}
        </button>
        <button
          onClick={handleNextWeek}
          type="button"
          className={`btn btn-light ${css.wrapIcon}`}
        >
          <ArrowR />
        </button>
      </div>

      <CurrentDayBtn />
      {isOpen && (
        <DayPicker
          initialMonth={selectedDays[0]}
          className={css.weekPicker}
          selectedDays={selectedDays}
          showWeekNumbers
          showOutsideDays
          modifiers={modifiers}
          onDayClick={handleDayChange}
          onDayMouseEnter={handleDayEnter}
          onDayMouseLeave={handleDayLeave}
          onWeekClick={handleWeekClick}
        />
      )}
      <Helmet>
        <style>{`
    .SelectedWeek .DayPicker-Month {
      border-collapse: separate;
    }
    .SelectedWeek .DayPicker-WeekNumber {
      outline: none;
    }
    .SelectedWeek .DayPicker-Day {
      outline: none;
      border-radius: 0 !important;

    }
    .SelectedWeek .DayPicker-Day--hoverRange {
      background-color: #EFEFEF !important;
    }

    .SelectedWeek .DayPicker-Day--selectedRange {
      background-color: #c7e5f6 !important;
      border-top: 1px solid  var(--primary);
      border-bottom: 1px solid  var(--primary);
    }

    .SelectedWeek .DayPicker-Day--selectedRangeStart {
      background-color: var(--primary) !important;

    }

    .SelectedWeek .DayPicker-Day--selectedRangeEnd {
      background-color: var(--primary) !important;
     }

    .SelectedWeek .DayPicker-Day--selectedRange:not(.DayPicker-Day--outside).DayPicker-Day--selected,
    .SelectedWeek .DayPicker-Day--hoverRange:not(.DayPicker-Day--outside).DayPicker-Day--selected {
      color: black !important ;
    }

    .DayPicker-Months{
      background-color: #F8F9FA;
      border: 1px solid lightgray;
      border-radius: 0.25rem;
    }
  `}</style>
      </Helmet>
    </div>
  );
};

export default WeekPicker2;
