import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const SelectEmployee = () => {
  const [employee, setEmployee] = useState(null);

  const handleChange = employee => {
    setEmployee(employee);

    console.log(`Option selected:`, employee);
  };

  return <Select value={employee} onChange={handleChange} options={options} />;
};

export default SelectEmployee;
