import React, { Component } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import Helmet from 'react-helmet';

import ImageResize from './ImageResize';
import { addTimeEntry } from './imageHelper';
import css from './AddTimeEntry.module.scss';

const reportArr = [
  'Easy to enter time',
  'Fully customizable for Non-Profits',
  'Labor automatically allocated',
  'PTO time easily customizable',
  'Submit timesheets for approval',
  'Multiple timesheet approvers for a single group',
  'Include detailed descriptions of work done',
  'Take pictures of expense-related items',
  'Custom workflows, rules, and guidelines',
  'Match pay periods with closeout periods',
];

class AddTimeEntry extends Component {
  state = {
    value: 0,
    slides: [
      <ImageResize key="0" path={addTimeEntry[0]} />,
      <ImageResize key="1" path={addTimeEntry[1]} />,
      <ImageResize key="2" path={addTimeEntry[2]} />,
      <ImageResize key="3" path={addTimeEntry[3]} />,
      <ImageResize key="4" path={addTimeEntry[4]} />,
      <ImageResize key="5" path={addTimeEntry[5]} />,
      <ImageResize key="6" path={addTimeEntry[6]} />,
      <ImageResize key="7" path={addTimeEntry[7]} />,
      <ImageResize key="8" path={addTimeEntry[8]} />,
      <ImageResize key="9" path={addTimeEntry[9]} />,
    ],
    thumbnails: [
      <p key="0">{reportArr[0]}</p>,
      <p key="1">{reportArr[1]}</p>,
      <p key="2">{reportArr[2]}</p>,
      <p key="3">{reportArr[3]}</p>,
      <p key="4">{reportArr[4]}</p>,
      <p key="5">{reportArr[5]}</p>,
      <p key="6">{reportArr[6]}</p>,
      <p key="7">{reportArr[7]}</p>,
      <p key="8">{reportArr[8]}</p>,
      <p key="9">{reportArr[9]}</p>,
    ],
  };

  onchange = value => {
    this.setState({ value });
  };

  render() {
    const { value, slides, thumbnails } = this.state;
    return (
      <div className={css.wrapNonProfOrg}>
        <Carousel
          value={value}
          slides={slides}
          onChange={this.onchange}
          infinite
          autoPlay={4000}
          stopAutoPlayOnHover
        />
        <Dots
          className={css.dots}
          number={thumbnails.length}
          thumbnails={thumbnails}
          value={value}
          onChange={this.onchange}
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

export default AddTimeEntry;
