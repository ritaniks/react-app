import React from 'react';

// import css from './Expenses.module.scss'
const Menu = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [head, ...tail] = React.Children.toArray(children);

  return (
    <div
      className="menu"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {head}
      {isOpen && <div className="open">{tail}</div>}
    </div>
  );
};

const Item = ({ children, onClick }) => {
  return (
    <div className="item" onClick={onClick}>
      {children}
    </div>
  );
};

const Expenses = () => {
  return (
    <>
      <Menu>
        <Item onClick={() => alert('Link one clicked!')}>Link One</Item>
        <Item onClick={() => alert('Link two clicked!')}>Link Two</Item>
        <Item onClick={() => alert('Link three clicked!')}>Link Three</Item>
      </Menu>
    </>
  );
};

export default Expenses;
