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
          className={`mb-6 px-3 px-md-4 shadow-sm ${
            size.width < 768 && 'mb-5'
          }`}
        >
          <Navbar.Brand className="mr-auto">
            <Logo />
          </Navbar.Brand>
          <Button
            variant="outline-light"
            className={`mr-sm-3 ${size.width < 768 ? 'd-none' : 'd-block'}`}
          >
            <a href="https://www.timeledger.com/time-tracking-tool-demo#demo-form">
              Schedule a demo
            </a>
          </Button>
          <Button
            variant="warning"
            className={size.width < 768 ? 'btn-sm' : 'btn'}
          >
            <a href="https://www.timeledger.com/free-trial-landing">
              Start Free Trial
            </a>
          </Button>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
