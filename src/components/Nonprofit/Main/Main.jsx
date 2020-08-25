import React from 'react';

import { Container } from 'react-bootstrap';
import Hero from './parts/Hero';
import Reviews from './parts/Reviews';

import m1grantor2x from '../../../assets/img/nonprofit/m1grantor@2x.png';
import d1grantor from '../../../assets/img/nonprofit/d1grantor.png';
// import m1grantor from '../../../assets/img/nonprofit/m1grantor.png';
import d1grantor2x from '../../../assets/img/nonprofit/d1grantor@2x.png';

import css from './Main.module.scss';

const Main = () => {
  return (
    <main>
      <Hero />
      <Container>
        <div className={`mx-auto text-center mb-4 ${css.title}`}>
          <h2 className={`mb-3 ${css.Main}`}>Grantor Report</h2>
          Users can enter in their time they worked on different programs that
          feed into our Grantor report, which can be generated with one-click.
        </div>
        <picture>
          <source
            media="(min-width: 1200px)"
            sizes="50vw"
            srcSet={d1grantor2x}
          />
          <source media="(min-width: 992px)" srcSet={d1grantor} />
          <img src={m1grantor2x} alt="Grantor" style={{ width: ' 100%' }} />
        </picture>
      </Container>
      <Reviews />
    </main>
  );
};

export default Main;
