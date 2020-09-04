import React, { useState, useEffect } from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
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

const DayPicker3 = () => {
  const [hoverRange, setHoverRange] = useState(undefined);
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayChange = date => {
    console.log(
      getWeekDays(getWeekRange(date).from),
      'getWeekDays(getWeekRange(date).from)',
    );
    setSelectedDays({ selectedDays: getWeekDays(getWeekRange(date).from) });
    // this.setState({
    //   selectedDays: getWeekDays(getWeekRange(date).from),
    // });
  };
  const handleDayEnter = date => {
    setHoverRange(getWeekRange(date));
    // this.setState({
    //   hoverRange: getWeekRange(date),
    // });
  };

  const handleDayLeave = () => {
    setHoverRange(undefined);
    // this.setState({
    //   hoverRange: undefined,
    // });
  };

  const handleWeekClick = (weekNumber, days, e) => {
    setSelectedDays(days);
    // this.setState({
    //   selectedDays: days,
    // });
  };

  useEffect(() => {
    // console.log(hoverRange, 'hoverRange');
    // console.log(selectedDay, 'selectedDays');
    // const daysAreSelected = selectedDay.length > 0;
    // const modifiers = {
    //   hoverRange,
    //   selectedRange: daysAreSelected && {
    //     from: selectedDay[0],
    //     to: selectedDay[6],
    //   },
    //   hoverRangeStart: hoverRange && hoverRange.from,
    //   hoverRangeEnd: hoverRange && hoverRange.to,
    //   selectedRangeStart: daysAreSelected && selectedDay[0],
    //   selectedRangeEnd: daysAreSelected && selectedDay[6],
    // };
    // console.log(modifiers, 'modifiers');
  }, []);

  const highlighted = {
    from: new Date(2018, 0, 12),
    to: new Date(2018, 0, 16),
  };

  return (
    <DayPickerInput
      dayPickerProps={{
        month: new Date(),
        showWeekNumbers: true,
        modifiers: highlighted,
        todayButton: 'Today',
        // selectedDays={selectedDay},
        // showWeekNumbers,

        // modifiers={modifiers}
        // onDayClick={handleDayChange},
        // onDayMouseEnter={handleDayEnter},
        // onDayMouseLeave={handleDayLeave},
        // onWeekClick={handleWeekClick},
      }}
    />
  );
};

export default DayPicker3;
