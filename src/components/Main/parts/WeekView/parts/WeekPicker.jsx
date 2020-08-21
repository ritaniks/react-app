import React, { Component } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import DayPicker from 'react-day-picker';

import css from './WeekPicker.module.scss';
import 'react-day-picker/lib/style.css';

function getWeekDays(weekStart) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(moment(weekStart).add(i, 'days').toDate());
  }
  return days;
}

function getWeekRange(date) {
  return {
    from: moment(date).startOf('week').toDate(),
    to: moment(date).endOf('week').toDate(),
  };
}

class WeekPicker extends Component {
  state = {
    hoverRange: undefined,
    selectedDays: [],
    isOpen: false,
  };

  handleDayChange = date => {
    this.setState({
      selectedDays: getWeekDays(getWeekRange(date).from),
    });
  };

  handleDayEnter = date => {
    this.setState({
      hoverRange: getWeekRange(date),
    });
  };

  handleDayLeave = () => {
    this.setState({
      hoverRange: undefined,
    });
  };

  handleWeekClick = (weekNumber, days, e) => {
    this.setState({
      selectedDays: days,
    });
  };
  handleToogle = () => {
    this.setState(prev => ({
      isOpen: !prev.isOpen,
    }));
  };

  componentDidMount() {
    this.setState({
      selectedDays: getWeekDays(getWeekRange(new Date()).from),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedDays, isOpen } = this.state;

    if (prevState.selectedDays !== selectedDays && isOpen === true) {
      this.setState(prev => ({
        isOpen: !prev.isOpen,
      }));
    }
  }
  render() {
    const { hoverRange, selectedDays, isOpen } = this.state;

    const daysAreSelected = selectedDays.length > 0;

    const modifiers = {
      hoverRange,
      selectedRange: daysAreSelected && {
        from: selectedDays[0],
        to: selectedDays[6],
      },
      hoverRangeStart: hoverRange && hoverRange.from,
      hoverRangeEnd: hoverRange && hoverRange.to,
      selectedRangeStart: daysAreSelected && selectedDays[0],
      selectedRangeEnd: daysAreSelected && selectedDays[6],
    };
    return (
      <div className={`${css.wrapWeekPicker} SelectedWeek`}>
        <button onClick={this.handleToogle} type="button">
          {moment(selectedDays[0]).format('MMM D')} –{' '}
          {moment(selectedDays[6]).format('ll')}
        </button>
        {isOpen && (
          <DayPicker
            className={css.weekPicker}
            selectedDays={selectedDays}
            showWeekNumbers
            showOutsideDays
            modifiers={modifiers}
            onDayClick={this.handleDayChange}
            onDayMouseEnter={this.handleDayEnter}
            onDayMouseLeave={this.handleDayLeave}
            onWeekClick={this.handleWeekClick}
          />
        )}
        <Helmet>
          <style>{`
        .SelectedWeek .DayPicker-Month {
          border-collapse: separate;
        }
        .SelectedWeek .DayPicker-WeekNumber {
          outline: none;
        }
        .SelectedWeek .DayPicker-Day {
          outline: none;
          border: 1px solid transparent;
        }
        .SelectedWeek .DayPicker-Day--hoverRange {
          background-color: #EFEFEF !important;
        }

        .SelectedWeek .DayPicker-Day--selectedRange {
          background-color: #fff7ba !important;
          border-top-color: #FFEB3B;
          border-bottom-color: #FFEB3B;
          border-left-color: #fff7ba;
          border-right-color: #fff7ba;
        }

        .SelectedWeek .DayPicker-Day--selectedRangeStart {
          background-color: #FFEB3B !important;
          border-left: 1px solid #FFEB3B;
        }

        .SelectedWeek .DayPicker-Day--selectedRangeEnd {
          background-color: #FFEB3B !important;
          border-right: 1px solid #FFEB3B;
        }

        .SelectedWeek .DayPicker-Day--selectedRange:not(.DayPicker-Day--outside).DayPicker-Day--selected,
        .SelectedWeek .DayPicker-Day--hoverRange:not(.DayPicker-Day--outside).DayPicker-Day--selected {
          border-radius: 0 !important;
          color: black !important;
        }
        .SelectedWeek .DayPicker-Day--hoverRange:hover {
          border-radius: 0 !important;
        }
      `}</style>
        </Helmet>
      </div>
    );
  }
}

export default WeekPicker;
