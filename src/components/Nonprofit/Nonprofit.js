import React from 'react';
import Header from './Header/Header';

import hero750 from '../../assets/img/nonprofit/hero-mobile@2x.png';
import hero1600 from '../../assets/img/nonprofit/hero.png';

// import css from './Nonprofit.module.scss';

const Nonprofit = () => {
  return (
    <div>
      <Header />
      <picture>
        <source media="(min-width: 1600px)" srcSet={hero1600} />
        <img src={hero750} alt="Hero" style={{ width: ' 100%' }} />
      </picture>
    </div>
  );
};

export default Nonprofit;
