import React from 'react';

import css from './StartEndTime.module.scss';

const StartTime = () => {
  return (
    <>
      <select className={css.select}>
        <option>11:00</option>
        <option>11:30</option>
        <option>12:00</option>
        <option>12:30</option>
      </select>
    </>
  );
};

export default StartTime;
