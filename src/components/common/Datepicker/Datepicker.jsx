import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

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
        inline
        todayButton="Today"
      />
    </>
  );
};

export default Datepicker;
