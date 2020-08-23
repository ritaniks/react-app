import React, { useEffect, useState, useRef } from 'react';
// import DatePicker from 'react-datepicker';
import DayPicker from 'react-day-picker';
import moment from 'moment';
// import cn from 'classnames';
import { ButtonGroup, Button } from 'react-bootstrap';
// import { ReactComponent as Calendar } from '../../../../../assets/img/main/calendar.svg';
import { ReactComponent as ArrowL } from '../../../../../assets/img/main/arrows/chevron-left.svg';
import { ReactComponent as ArrowR } from '../../../../../assets/img/main/arrows/chevron-right.svg';
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
    // setIsOpen(false);
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
    <div ref={node} className={css.wrapDayPicker}>
      <ButtonGroup className={css.wrapCalendar}>
        <Button
          onClick={handleBackDay}
          variant="light"
          className={css.wrapIcon}
        >
          <ArrowL />
        </Button>
        <Button onClick={handleToogle} variant="light">
          {/* <Calendar /> */}
          {convertDate}
        </Button>
        <Button
          onClick={handleNextDay}
          variant="light"
          className={css.wrapIcon}
        >
          <ArrowR />
        </Button>
      </ButtonGroup>
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
  );
};

export default OneDayPicker;
