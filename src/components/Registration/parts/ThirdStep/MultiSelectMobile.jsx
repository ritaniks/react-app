import React from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
// import css from './MultiSelectMobile.module.scss';

const tmp = {
  managers: [
    { name: 'Jack', checked: false, role: 'managers' },
    { name: 'Kate', checked: false, role: 'managers' },
    { name: 'Tom', checked: false, role: 'managers' },
  ],

  users: [
    { name: 'Elis', checked: false, role: 'users' },
    { name: 'Jonny', checked: false, role: 'users' },
    { name: 'Christian', checked: false, role: 'users' },
    { name: 'David', checked: false, role: 'users' },
    { name: 'Carter', checked: false, role: 'users' },
    { name: 'Evelyn', checked: false, role: 'users' },
    { name: 'Scarlett', checked: false, role: 'users' },
    { name: 'Eleanor', checked: false, role: 'users' },
    { name: 'Kingston', checked: false, role: 'users' },
    { name: 'Julian', checked: false, role: 'users' },
    { name: 'Lincoln', checked: false, role: 'users' },
    { name: 'Addison', checked: false, role: 'users' },
  ],
};

const MultiSelectMobile = () => {
  const widthDivice = useWindowSize().width;
  return <div>MultiSelectMobile</div>;
};

export default MultiSelectMobile;
