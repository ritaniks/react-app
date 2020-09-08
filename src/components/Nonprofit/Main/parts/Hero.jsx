import React from 'react';
import Carousel from '@brainhubeu/react-carousel';

import WaveHero from './WaveHero';
import ImageResize from './ImageResize';
import { hero } from './imageHelper';

import useWindowSize from '../../../hooks/useWindowSize';

import css from './Hero.module.scss';

const Hero = () => {
  const size = useWindowSize();
  return (
    <div className={`sectionbg ${size.width < 768 ? 'pt-4' : 'pt-6'}`}>
      <div className="container-fluid">
        <div className="container mx-auto">
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
            <button
              type="button"
              className={`btn btn-primary btn-lg mr-md-4 mr-3 mb-3 mb-md-0 px-5 ${
                size.width < 768 && 'btn-block'
              }`}
            >
              <a
                className={css.demo}
                href="https://www.timeledger.com/time-tracking-tool-demo#demo-form"
              >
                Schedule a demo
              </a>
            </button>
            <button
              type="button"
              className={`btn btn-warning btn-lg ${
                size.width < 768 && 'btn-block'
              }`}
            >
              <a href="https://www.timeledger.com/free-trial-landing">
                Start your Free Trial Now
              </a>
            </button>
          </div>
          <div className="row">
            <Carousel
              className={css.carousel}
              infinite
              autoPlay={size.width < 768 ? 5000 : null}
              stopAutoPlayOnHover
              slidesPerPage={size.width > 768 ? 3 : 1}
            >
              <div className="col">
                <p className={css.feature}>
                  Easily allocates time and expenses across multiple grants and
                  funding sources.
                </p>
              </div>
              <div className="col">
                <p className={css.feature}>
                  Meets all non-profit auditing requirements including Single
                  Audit and Program-Specific Auditing.
                </p>
              </div>
              <div className="col">
                <p className={css.feature}>
                  TimeLedger’s extensive reports include specialized non-profit
                  reports that distribute fringe pool expenses by user and
                  project.
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className={`${css.hero} container-fluid`}>
        <div className={`d-flex justify-content-center  ${css.heroImg}`}>
          <WaveHero />
          <ImageResize path={hero[0]} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
