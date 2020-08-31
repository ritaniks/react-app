import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Carousel from '@brainhubeu/react-carousel';

import ImageResize from './ImageResize';
import { hero } from './imageHelper';

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

        <Carousel
          className={css.carousel}
          infinite
          autoPlay={size.width < 768 ? 3000 : null}
          stopAutoPlayOnHover
          slidesPerPage={size.width > 768 ? 3 : 1}
        >
          <p className={css.feature}>
            Easily allocates time and expenses across multiple grants and
            funding sources.
          </p>
          <p className={css.feature}>
            Meets all non-profit auditing requirements including Single Audit
            and Program-Specific Auditing.
          </p>
          <p className={css.feature}>
            TimeLedger’s extensive reports include specialized non-profit
            reports that distribute fringe pool expenses by user and project.
          </p>
        </Carousel>
      </Container>
      <Container fluid className={`${css.hero} p-0`}>
        <Row className="d-flex justify-content-center">
          <ImageResize path={hero[0]} />
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
