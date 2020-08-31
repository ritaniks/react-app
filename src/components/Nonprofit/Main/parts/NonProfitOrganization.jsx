import React, { Component } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import Helmet from 'react-helmet';

import ImageResize from './ImageResize';
import { nonProfitOrg } from './imageHelper';
import css from './NonProfitOrganization.module.scss';

const reportArr = [
  'Detailed',
  'Detailed / Collapsed Fringe Rows',
  'Summary',
  'Summary / Collapsed Fringe Rows',
];

class NonProfitOrganization extends Component {
  state = {
    value: 0,
    slides: [
      <ImageResize path={nonProfitOrg[0]} />,
      <ImageResize path={nonProfitOrg[1]} />,
      <ImageResize path={nonProfitOrg[2]} />,
      <ImageResize path={nonProfitOrg[3]} />,
    ],
    thumbnails: [
      <p>{reportArr[0]}</p>,
      <p>{reportArr[1]}</p>,
      <p>{reportArr[2]}</p>,
      <p>{reportArr[3]}</p>,
    ],
  };

  onchange = value => {
    this.setState({ value });
  };

  render() {
    const { value, slides, thumbnails } = this.state;
    return (
      <div className={css.wrapNonProfOrg}>
        <Dots
          className={css.dots}
          number={thumbnails.length}
          thumbnails={thumbnails}
          value={value}
          onChange={this.onchange}
        />

        <Carousel
          value={value}
          slides={slides}
          onChange={this.onchange}
          infinite
          autoPlay={3000}
          stopAutoPlayOnHover
        />
        <Helmet>
          <style>{`
            .BrainhubCarousel__thumbnail--selected {
                color: #fff;
                background-color: #0083cd !important;
            }
            .BrainhubCarousel__dots .BrainhubCarousel__thumbnail{
                opacity: 1;
            }
            .BrainhubCarousel__dots .BrainhubCarousel__thumbnail:hover{
                background-color: var(--light);
            }
          `}</style>
        </Helmet>
      </div>
    );
  }
}

export default NonProfitOrganization;
