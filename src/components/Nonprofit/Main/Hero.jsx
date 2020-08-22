import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeroImg from './HeroImg';

import css from './Hero.module.scss';
// import '../../../assets/css/variables.scss';

const Hero = () => {
  return (
    <div>
      <Container className="mb-4">
        <h1 className={`mx-auto mb-4 ${css.hero}`}>
          TimeLedger includes specialized features for Non-Profit Organizations
          that sharply reduce administrative reporting time
        </h1>
        <Row className="mb-6">
          <Col className="d-flex justify-content-center">
            <Button variant="primary" size="lg" className="mr-md-4 mr-3 px-5">
              Demo
            </Button>
            <Button variant="warning" size="lg">
              Start Free Trial
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4}>
            <div className={`pl-2 ${css.borderLeft2}`}>
              Easily allocates time and expenses across multiple grants and
              funding sources.
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className={`pl-2 ${css.borderLeft2}`}>
              Meets all non-profit auditing requirements. We definitely need
              additional sentence here.
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className={`pl-2 ${css.borderLeft2}`}>
              TimeLedger’s extensive reports include specialized non-profit
              reports that distribute fringe pool expenses by user and project.
            </div>
          </Col>
        </Row>
      </Container>
      <HeroImg />
    </div>
  );
};

export default Hero;
