import React from 'react';
// import moment from 'moment';

import css from './SelectedDate.module.scss';

const SelectedDate = ({ selectedDate }) => {
  // const parseDate

  return (
    <>
      {/* {console.log(selectedDate, 'selectedDate')} */}
      <p className={css.date}>
        Is {selectedDate}
        {/* {moment().format('ll')} */}
      </p>
      {/* <p> It is {moment().format('LT')}</p> */}
    </>
  );
};

export default SelectedDate;
