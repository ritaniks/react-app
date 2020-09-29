import React from 'react';

import css from './StartEndTime.module.scss';

const EndTime = () => {
  return (
    <div>
      <select className={css.select}>
        <option>13:00</option>
        <option>13:30</option>
        <option>14:00</option>
        <option>14:30</option>
      </select>
    </div>
  );
};

export default EndTime;
