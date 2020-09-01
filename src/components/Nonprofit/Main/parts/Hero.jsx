import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from '@brainhubeu/react-carousel';

// import WaveAnimation from './WaveAnimation';
import WaveHero from './WaveHero';
import ImageResize from './ImageResize';
import { hero } from './imageHelper';

import useWindowSize from '../../../hooks/useWindowSize';

import css from './Hero.module.scss';

const Hero = () => {
  const size = useWindowSize();
  return (
    <div className={`sectionbg ${size.width < 768 ? 'pt-4' : 'pt-6'}`}>
      <Container fluid>
        <Container className="mb-2 mb-md-4">
          <h1 className={`mx-auto mb-2 mb-md-3 ${css.titleH1}`}>
            TimeLedger is built to help your Non-Profit Organization
          </h1>
          <h3 className={`text-center mx-auto mb-3 mb-md-4 ${css.titleH3}`}>
            Get Grant and Funding Reports with One Click!
          </h3>
          <div
            className={`mb-md-5 justify-content-md-center d-md-flex ${
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
              <a href="https://www.timeledger.com/free-trial-landing">
                Start Free Trial
              </a>
            </Button>
          </div>
          <Row>
            <Carousel
              className={css.carousel}
              infinite
              autoPlay={size.width < 768 ? 5000 : null}
              stopAutoPlayOnHover
              slidesPerPage={size.width > 768 ? 3 : 1}
            >
              <Col>
                <p className={css.feature}>
                  Easily allocates time and expenses across multiple grants and
                  funding sources.
                </p>
              </Col>
              <Col>
                <p className={css.feature}>
                  Meets all non-profit auditing requirements including Single
                  Audit and Program-Specific Auditing.
                </p>
              </Col>
              <Col>
                <p className={css.feature}>
                  TimeLedger’s extensive reports include specialized non-profit
                  reports that distribute fringe pool expenses by user and
                  project.
                </p>
              </Col>
            </Carousel>
          </Row>
        </Container>
      </Container>

      <Container fluid className={`${css.hero} p-0`}>
        <Row className="d-flex justify-content-center">
          <WaveHero />
          <ImageResize path={hero[0]} />
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
