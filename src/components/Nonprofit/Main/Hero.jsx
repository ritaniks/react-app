import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeroImg from './HeroImg';

import css from './Hero.module.scss';

const Hero = () => {
  return (
    <div>
      <Container>
        <h1 className="mx-auto mb-4">
          TimeLedger includes specialized features for Non-Profit Organizations
          that sharply reduce administrative reporting time{' '}
        </h1>
        <Row className="mb-6">
          <Col className="d-flex justify-content-center mb-0">
            <Button variant="info" size="lg" className="mr-md-4 mr-sm-3 px-5">
              Demo
            </Button>{' '}
            <Button variant="warning" size="lg">
              Start Free Trial
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={css.borderLeft}>
              Easily allocates time and expenses across multiple grants and
              funding sources.
            </p>
          </Col>
          <Col>
            <p className={css.borderLeft}>
              Meets all non-profit auditing requirements.
            </p>
          </Col>
          <Col>
            <p className={css.borderLeft}>
              TimeLedger’s extensive reports include specialized non-profit
              reports that distribute fringe pool expenses by user and project.
            </p>
          </Col>
        </Row>
        <HeroImg />
      </Container>
    </div>
  );
};

export default Hero;
