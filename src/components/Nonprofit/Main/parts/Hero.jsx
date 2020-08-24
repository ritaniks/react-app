import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SectionTitle from './SectionTitle';

import HeroImgD from '../../../../assets/img/nonprofit/hero.png';
import HeroImgM from '../../../../assets/img/nonprofit/hero-mobile@2x.png';

import useWindowSize from '../../../hooks/useWindowSize';

import css from './Hero.module.scss';
// import '../../../assets/css/variables.scss';

const Hero = () => {
  const size = useWindowSize();
  return (
    <div>
      <Container className="mb-4">
        <h1 className={`mx-auto mb-4 ${css.hero}`}>
          TimeLedger includes specialized features for Non-Profit Organizations
          that sharply reduce administrative reporting time
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
      {size.width < 768 && (
        <img src={HeroImgM} alt="hero-img-mobile" className={css.img} />
      )}
      {size.width > 768 && (
        <img src={HeroImgD} alt="hero-img-desktop" className={css.img} />
      )}
      <SectionTitle />
    </div>
  );
};

export default Hero;
