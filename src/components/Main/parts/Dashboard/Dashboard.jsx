import React from 'react';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  { value: 'one', label: 'One' },
  {
    value: 'two',
    label: 'Two',
    className: 'myOptionClassName',
  },
  {
    type: 'group',
    name: 'group1',
    items: [
      { value: 'three', label: 'Three', className: 'myOptionClassName' },
      { value: 'four', label: 'Four' },
    ],
  },
  {
    type: 'group',
    name: 'group2',
    items: [
      { value: 'five', label: 'Five' },
      { value: 'six', label: 'Six' },
    ],
  },
];

const defaultOption = options[0];
const onSelect = () => {
  console.log('select');
};

const Dashboard = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <Dropdown
        options={options}
        onChange={onSelect}
        value={defaultOption}
        placeholder="Select an option"
      />
    </>
  );
};

export default Dashboard;
