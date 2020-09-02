import React from 'react';

// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';

import Logo from '../../Header/parts/Logo';

import useWindowSize from '../../hooks/useWindowSize';

const Header = () => {
  const size = useWindowSize();
  return (
    <header className={'container'}>
      {/* <Container>
        <Navbar fixed="top" bg="primary" className={`px-3 px-md-4 shadow-sm `}>
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
      </Container> */}
      <nav className="navbar bg-primary px-3 px-md-4 shadow-sm fixed-top">
        <a class="navbar-brand mr-auto" href="#">
          <Logo />
        </a>
        <button
          type="button"
          className={`btn btn-outline-light mr-sm-3 ${
            size.width < 768 ? 'd-none' : 'd-block'
          }`}
        >
          <a href="https://www.timeledger.com/time-tracking-tool-demo#demo-form">
            Schedule a demo
          </a>
        </button>
        <button type="button" className={`btn btn-warning `}>
          <a href="https://www.timeledger.com/free-trial-landing">
            Start Free Trial
          </a>
        </button>
      </nav>
    </header>
  );
};

export default Header;
