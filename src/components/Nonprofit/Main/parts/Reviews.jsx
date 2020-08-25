import React, { Component } from 'react';

import Helmet from 'react-helmet';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import css from './Reviews.module.scss';

const review = [{ desr: '000000' }, { desr: '111111' }, { desr: '222222' }];
const OneSlide = ({ descr }) => {
  return <div className={css.oneRewiev}>{descr}</div>;
};

class Reviews extends Component {
  state = {
    value: 0,
    slides: [
      <OneSlide descr="Good company 1" />,
      <OneSlide descr="Good company 2" />,
      <OneSlide descr="Good company 3" />,
    ],
  };

  handleChange = value => {
    this.setState({ value });
  };
  render() {
    const { slides } = this.state;
    console.log(slides, 'slides');
    return (
      <div>
        <Carousel
          dots
          infinite={true}
          arrows={true}
          slidesPerPage={2}
          //   autoPlay={5000}
          stopAutoPlayOnHover={true}
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.handleChange}
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
    `}
          </style>
        </Helmet>
      </div>
    );
  }
}

export default Reviews;
