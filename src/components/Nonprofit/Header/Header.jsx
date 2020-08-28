import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Logo from '../../Header/parts/Logo';

import useWindowSize from '../../hooks/useWindowSize';

// import css from './Header.module.scss';

const Header = () => {
  const size = useWindowSize();
  return (
    <header>
      <Container>
        <Navbar
          fixed="top"
          bg="primary"
          variant="dark"
          className={`mb-6 px-3 px-md-4 shadow-sm ${
            size.width < 768 && 'mb-5'
          }`}
        >
          <Navbar.Brand className="mr-auto">
            <Logo />
          </Navbar.Brand>
          <Button
            variant="outline-light"
            className={`mr-sm-3 px-4 ${
              size.width < 768 ? 'd-none' : 'd-block'
            }`}
          >
            Demo
          </Button>{' '}
          <Button
            variant="warning"
            className={size.width < 768 ? 'btn-sm' : 'btn'}
          >
            Start Free Trial
          </Button>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
