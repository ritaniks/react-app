import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
// import cn from 'classnames';
import { ButtonGroup, Button } from 'react-bootstrap';
import { ReactComponent as Calendar } from '../../../../../assets/img/main/calendar.svg';
import { ReactComponent as ArrowL } from '../../../../../assets/img/main/arrows/chevron-left.svg';
import { ReactComponent as ArrowR } from '../../../../../assets/img/main/arrows/chevron-right.svg';

import css from './HeaderWeekView.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

const HeaderWeekView = () => {
  const [startDate, setStartDate] = useState(new Date());

  const convertDate = moment(startDate).format('ll');

  const handleBackDay = () => {
    const yesterday = moment(startDate).subtract(1, 'days')._d;
    setStartDate(yesterday);
  };

  const handleNextDay = () => {
    const tomorrow = moment(startDate).add(1, 'days')._d;
    setStartDate(tomorrow);
  };

  const CustomInput = ({ onClick }) => {
    return (
      <Button variant="light" className={css.calendarBtn} onClick={onClick}>
        {/* {convertDate} */}

        <div className={css.wrapIconCalendar}>
          <Calendar />
        </div>
      </Button>
    );
  };
  return (
    <div className={css.container}>
      <ButtonGroup className={css.wrapCalendar}>
        <Button
          onClick={handleBackDay}
          variant="light"
          className={css.wrapIcon}
        >
          <ArrowL />
        </Button>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          customInput={<CustomInput />}
          todayButton="Today"
        />
        <Button
          onClick={handleNextDay}
          variant="light"
          className={css.wrapIcon}
        >
          <ArrowR />
        </Button>
      </ButtonGroup>
      {convertDate}
    </div>
  );
};

export default HeaderWeekView;
