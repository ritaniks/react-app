import React, { useState, useEffect } from 'react';
// import { subDays, addDays } from 'date-fns';
import DatePicker from 'react-datepicker';

import './datapicker.scss';

import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  // useEffect(() => {
  //   console.log(startDate, 'startDate');
  // }, [startDate]);

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        // highlightDates={[subDays(new Date(), 2), addDays(new Date(), 2)]}
        inline
        todayButton="Today"
      />
    </>
  );
};

export default Datepicker;
