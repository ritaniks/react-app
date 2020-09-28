import React from 'react';

import css from './Expenses.module.scss';
const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [head, ...tail] = React.Children.toArray(children);

  return (
    <div
      className={css.dropdown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {head}
      {isOpen && <div className={css.open}>{tail}</div>}
    </div>
  );
};

const Item = ({ children, onClick }) => {
  return (
    <div className={css.item} onClick={onClick}>
      {children}
    </div>
  );
};

const Expenses = () => {
  return (
    <>
      <Dropdown>
        <Item onClick={() => alert('User')}>Kristina</Item>
        <Item onClick={() => alert('Profile')}>Profile</Item>
        <Item onClick={() => alert('Logout')}>Logout</Item>
      </Dropdown>
    </>
  );
};

export default Expenses;
