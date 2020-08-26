import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Hero from './parts/Hero';
import Reviews from './parts/Reviews';

import m1grantor2x from '../../../assets/img/nonprofit/m1grantor@2x.png';
import d1grantor from '../../../assets/img/nonprofit/d1grantor.png';
import m1grantor from '../../../assets/img/nonprofit/m1grantor.png';
import d1grantor2x from '../../../assets/img/nonprofit/d1grantor@2x.png';

import m2nonprofit2x from '../../../assets/img/nonprofit/s1m2nonprofit@2x.png';
import d2nonprofit from '../../../assets/img/nonprofit/s1d2nonprofit.png';
import m2nonprofit from '../../../assets/img/nonprofit/s1m2nonprofit.png';
import d2nonprofit2x from '../../../assets/img/nonprofit/s1d2nonprofit@2x.png';

import m3customizevoc2x from '../../../assets/img/nonprofit/m3customize-voc@2x.png';
import d3customizevoc from '../../../assets/img/nonprofit/d3customize-voc.png';
import m3customizevoc from '../../../assets/img/nonprofit/m3customize-voc.png';
import d3customizevoc2x from '../../../assets/img/nonprofit/d3customize-voc@2x.png';

import useWindowSize from '../../hooks/useWindowSize';

import css from './Main.module.scss';

const Main = () => {
  const size = useWindowSize();
  return (
    <main className={size.width < 768 ? 'mt-4' : 'mt-6'}>
      <Hero />
      <Container>
        <div className={`mx-auto text-center mb-4 ${css.title}`}>
          <h2 className={`mb-md-3 ${css.titleH2}`}>Grantor Report</h2>
          Users can enter in their time they worked on different programs that
          feed into our Grantor report, which can be generated with one-click.
        </div>
        <Row className="d-flex justify-content-center mb-6">
          <picture className="d-flex justify-contnet-center">
            <source media="(min-width: 1600px)" srcSet={d1grantor2x} />
            <source media="(min-width: 768px)" srcSet={d1grantor} />
            <img
              src={m1grantor2x}
              alt="Grantor"
              style={{ maxWidth: '100%' }}
              srcSet={m1grantor}
            />
          </picture>
        </Row>

        <div className={`mx-auto text-center mb-4 ${css.title}`}>
          <h2 className={`mb-md-3 ${css.titleH2}`}>
            Non-Profit Organization, NPO Contracts Profitability Report
          </h2>
          With automatic Fringe Pool disbursement by project and user resource.
        </div>
        <Row className="d-flex justify-content-md-end justify-content-center mb-6">
          <picture className="d-flex justify-contnet-center">
            <source media="(min-width: 1600px)" srcSet={d2nonprofit2x} />
            <source media="(min-width: 768px)" srcSet={d2nonprofit} />
            <img
              src={m2nonprofit2x}
              alt="Grantor"
              style={{ maxHeight: '500px' }}
              srcSet={m2nonprofit}
            />
          </picture>
        </Row>

        <div className={`mx-auto text-center mb-4 ${css.title}`}>
          <h2 className={`mb-md-3 ${css.titleH2}`}>Customizable vocabulary</h2>
          Gets your people quickly adopting TimeLedger by using your existing
          terms for users, clients, grants, and funding sources.
        </div>
        <Row className="d-flex justify-content-center mb-6">
          <picture className="d-flex justify-contnet-center">
            <source media="(min-width: 1600px)" srcSet={d3customizevoc2x} />
            <source media="(min-width: 768px)" srcSet={d3customizevoc} />
            <img
              src={m3customizevoc2x}
              alt="Grantor"
              style={{ maxHeight: '500px' }}
              srcSet={m3customizevoc}
            />
          </picture>
        </Row>
      </Container>
      <Reviews />
    </main>
  );
};

export default Main;
