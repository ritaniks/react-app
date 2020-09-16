import React from 'react';
import moment from 'moment';

// import css from './SelectedDate.module.scss';

const SelectedDate = () => {
  return (
    <>
      <p> Today is {moment().format('ll')}</p>
      {/* <p> It is {moment().format('LT')}</p> */}
    </>
  );
};

export default SelectedDate;
