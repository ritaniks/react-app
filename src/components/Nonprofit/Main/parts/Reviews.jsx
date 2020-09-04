/*eslint-disable*/
import React, { useState } from 'react';
import Carousel from '@brainhubeu/react-carousel';

import { ReactComponent as Quotes } from '../../../../assets/img/nonprofit/svg/quote-left.svg';
import useWindowSize from '../../../hooks/useWindowSize';

import css from './Reviews.module.scss';
import '@brainhubeu/react-carousel/lib/style.css';

const OneSlide = ({ descr, name }) => {
  const diviceWidth = useWindowSize().width;
  return (
    <div className={`${css.oneRewiev} ${diviceWidth < 1200 ? 'p-4' : 'p-6'}`}>
      <div className={css.wrapIcon}>
        <Quotes />
      </div>
      <p>{descr}</p>
      <p className="font-weight-bold pt-2 pt-md-4">{name}</p>
    </div>
  );
};

const Reviews = ({ brands }) => {
  const diviceWidth = useWindowSize().width;
  const [value, setValue] = useState(0);
  const [slides, setSlides] = useState([
    <OneSlide
      descr="TimeLedger's grant allocation report saves us 5 hours a week in reporting time.  We love it."
      name="Odin Rose"
    />,
    <OneSlide
      descr="We can easily allocate Fringe Pool expenses to grants using the TimeLedger Non-Profit Summary Reports."
      name="Melany Fuller"
    />,
    <OneSlide descr="Good company! Highly recommend!" name="Stanley Black" />,
  ]);

  const handleChange = val => {
    setValue(val);
  };

  return (
    <div className={css.wrapCarousel}>
      <Carousel
        dots
        infinite
        slidesPerPage={diviceWidth > 768 ? 2 : 1}
        // autoPlay={2000}
        // stopAutoPlayOnHover
        value={value}
        slides={slides}
        onChange={handleChange}
      />
    </div>
  );
};

export default Reviews;
