import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import './datapicker.scss';

import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = ({ value, onClick }) => (
    <button className="example-custom-input" onClick={onClick}>
      icon
    </button>
  );

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<CustomInput />}
        todayButton="Today"
      />
    </>
  );
};

export default Datepicker;
