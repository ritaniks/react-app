import React from 'react';

import css from './SelectedDate.module.scss';

const SelectedDate = ({ selectedDate }) => {
  return (
    <>
      <p className={css.date}>Is {selectedDate}</p>
    </>
  );
};

export default SelectedDate;
