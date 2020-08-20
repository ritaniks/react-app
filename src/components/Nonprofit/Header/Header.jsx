import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Logo from '../../Header/parts/Logo';

// import css from './Header.module.scss';

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home" className="mr-auto">
          <Logo />
        </Navbar.Brand>
        <Button variant="outline-light" className="mr-sm-3 px-4">
          Demo
        </Button>{' '}
        <Button variant="warning">Start your Free Trial Now</Button>
      </Navbar>
    </div>
  );
};

export default Header;
