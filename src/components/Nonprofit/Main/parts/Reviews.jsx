/*eslint-disable*/
import React, { useState } from 'react';

import Helmet from 'react-helmet';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import useWindowSize from '../../../hooks/useWindowSize';

import css from './Reviews.module.scss';

// const review = [{ desr: '000000' }, { desr: '111111' }, { desr: '222222' }];
// eslint-disable-next-line react/prop-types
const OneSlide = ({ descr }) => {
  return <div className={css.oneRewiev}>{descr}</div>;
};

const Reviews = () => {
  const diviceWidth = useWindowSize().width;
  const [value, setValue] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [slides, setSlides] = useState([
    <OneSlide descr="TimeLedger's grant allocation report saves us 5 hours a week in reporting time.  We love it." />,
    <OneSlide descr="We can easily allocate Fringe Pool expenses to grants using the TimeLedger Non-Profit Summary Reports." />,
    <OneSlide descr="Good company 3" />,
  ]);

  const handleChange = val => {
    setValue(val);
  };

  return (
    <div>
      <Carousel
        dots
        infinite
        // arrows
        slidesPerPage={diviceWidth > 768 ? 2 : 1}
        // autoPlay={2000}
        // stopAutoPlayOnHover
        value={value}
        slides={slides}
        onChange={handleChange}
      />

      <Helmet>
        <style>
          {`
    .BrainhubCarousel__dots .BrainhubCarousel__dot  {
        background: none;
    }
    .BrainhubCarousel__arrows {
        background-color: #efefef; 
        border-radius: 50%;
    }
    .BrainhubCarousel__arrows:hover:enabled {
        background-color: #0083cd;
    }
    .BrainhubCarousel .BrainhubCarousel__trackContainer .BrainhubCarousel__track{
        padding: 10px 0;
    }
    `}
        </style>
      </Helmet>
    </div>
  );
};

export default Reviews;
