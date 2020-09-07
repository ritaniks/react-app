import React from 'react';
import moment from 'moment';

// import css from './DateAndClock.module.scss';

const DateAndClock = () => {
  return (
    <>
      <p> Today is {moment().format('ll')}</p>
      <p> It is {moment().format('LT')}</p>
    </>
  );
};

export default DateAndClock;
