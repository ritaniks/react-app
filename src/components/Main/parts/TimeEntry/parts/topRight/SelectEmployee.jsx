import React, { useState } from 'react';
import Select from 'react-select';

// import { ReactComponent as User } from '../../../../../../assets/img/header/user.svg';

import css from './SelectEmployee.module.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const SelectEmployee = () => {
  const [employee, setEmployee] = useState(null);

  const handleChange = employee => {
    setEmployee(employee);

    // console.log(`Option selected:`, employee);
  };

  return (
    <>
      <Select
        className={css.select}
        // placeholder="Select employee"
        value={employee}
        onChange={handleChange}
        options={options}
      />

      {/* <button>user </button> */}
    </>
  );
};

export default SelectEmployee;
