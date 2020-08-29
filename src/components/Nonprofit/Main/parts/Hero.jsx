import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import mhero2x from '../../../../assets/img/nonprofit/mhero@2x.png';
import dhero from '../../../../assets/img/nonprofit/dhero.png';
import mhero from '../../../../assets/img/nonprofit/mhero.png';
import dhero2x from '../../../../assets/img/nonprofit/dhero@2x.png';

import useWindowSize from '../../../hooks/useWindowSize';

import css from './Hero.module.scss';

const Hero = () => {
  const size = useWindowSize();
  return (
    <div className={`sectionbg ${size.width < 768 ? 'pt-4' : 'pt-6'}`}>
      <Container className="mb-4">
        <h1 className={`mx-auto mb-4 ${css.titleH1}`}>
          Easily create Non-Profit Organization reports with TimeLedger
        </h1>
        <div
          className={`mb-6 justify-content-md-center d-md-flex ${
            size.width < 768 && 'mb-4'
          }`}
        >
          <Button
            variant="primary"
            size="lg"
            className={`mr-md-4 mr-3 mb-3 mb-md-0 px-5 ${
              size.width < 768 && 'btn-block'
            }`}
          >
            Demo
          </Button>
          <Button
            variant="warning"
            size="lg"
            className={size.width < 768 && 'btn-block'}
          >
            Start Free Trial
          </Button>
        </div>
        <Row>
          <Col xs={12} lg={4}>
            <div className={`pl-2 mb-3 mb-md-0 ${css.feature}`}>
              Quickly allocates time and expenses across multiple grants and
              funding sources.
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className={`pl-2 mb-3 mb-md-0 ${css.feature}`}>
              Meets all non-profit auditing requirements including Single Audit
              and Program-Specific Auditing.
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className={`pl-2 mb-3 mb-md-0 ${css.feature}`}>
              TimeLedger’s extensive reports include specialized non-profit
              reports that distribute fringe pool expenses by user and project.
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className={`${css.hero} p-0`}>
        <Row className="d-flex justify-content-center">
          <picture>
            <source media="(min-width: 1600px)" srcSet={dhero2x} />
            <source media="(min-width: 768px)" srcSet={dhero} />
            <img
              src={mhero}
              alt="Grantor"
              style={{ width: '100%' }}
              srcSet={mhero2x}
            />
          </picture>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
