import React, { useEffect, useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import Helmet from 'react-helmet';
import moment from 'moment';
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

const DayPickerInput2 = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [isEmpty, setIsEmpty] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [hoverRange, setHoverRange] = useState(undefined);
  const [selectedDays1, setSelectedDays1] = useState(undefined);

  // useEffect(() => {}, []);
  // useEffect(() => {
  //   let tmp = moment().day(0);
  //   let tmp2 = moment().day(5);
  //   console.log(tmp, tmp2, 'tmp');
  // }, [selectedDay]);

  const handleDayChange = date => {
    console.log(
      getWeekDays(getWeekRange(date).from),
      'getWeekDays(getWeekRange(date).from)',
    );
    setSelectedDays1({ selectedDays: getWeekDays(getWeekRange(date).from) });
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
    setSelectedDay(days);
    // this.setState({
    //   selectedDays: days,
    // });
  };

  useEffect(() => {
    // console.log(hoverRange, 'hoverRange');
    // console.log(selectedDay, 'selectedDays');

    const daysAreSelected = selectedDay.length > 0;

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

  // const input = dayPickerInput.getInput();
  // console.log(input, 'input');
  // console.log(selectedDay, 'selectedDay');
  // console.log(!input.value.trim(), '!input.value.trim()');
  // console.log(modifiers.disabled === true, 'modifiers.disabled === true');
  // setSelectedDay(selectedDay);
  // setIsEmpty(!input.value.trim());
  // setIsDisabled(modifiers.disabled === true);
  // this.setState({
  //   selectedDay,
  //   isEmpty: !input.value.trim(),
  //   isDisabled: modifiers.disabled === true,
  // });
  // };

  return (
    <>
      <div>
        <p>
          {isEmpty && 'Please type or pick a day'}
          {!isEmpty && !selectedDay && 'This day is invalid'}
          {selectedDay && isDisabled && 'This day is disabled'}
          {selectedDay &&
            !isDisabled &&
            `You chose ${selectedDay.toLocaleDateString()}`}
        </p>
        <DayPickerInput
          value={selectedDay}
          // onDayChange={handleDayChange}
          dayPickerProps={{
            selectedDays: selectedDay,
          }}
          //
          formatDate={formatDate}
          parseDate={parseDate}
          format="LL"
          placeholder={`ggg`}
          //
          selectedDays={selectedDay}
          showWeekNumbers
          showOutsideDays
          // modifiers={modifiers}
          // onDayClick={handleDayChange}
          // onDayMouseEnter={handleDayEnter}
          // onDayMouseLeave={handleDayLeave}
          // onWeekClick={handleWeekClick}
        />
      </div>
      <Helmet>
        <style>{`
  .SelectedWeekExample .DayPicker-Month {
    border-collapse: separate;
  }
  .SelectedWeekExample .DayPicker-WeekNumber {
    outline: none;
  }
  .SelectedWeekExample .DayPicker-Day {
    outline: none;
    border: 1px solid transparent;
  }
  .SelectedWeekExample .DayPicker-Day--hoverRange {
    background-color: #EFEFEF !important;
  }

  .SelectedWeekExample .DayPicker-Day--selectedRange {
    background-color: #fff7ba !important;
    border-top-color: #FFEB3B;
    border-bottom-color: #FFEB3B;
    border-left-color: #fff7ba;
    border-right-color: #fff7ba;
  }

  .SelectedWeekExample .DayPicker-Day--selectedRangeStart {
    background-color: #FFEB3B !important;
    border-left: 1px solid #FFEB3B;
  }

  .SelectedWeekExample .DayPicker-Day--selectedRangeEnd {
    background-color: #FFEB3B !important;
    border-right: 1px solid #FFEB3B;
  }

  .SelectedWeekExample .DayPicker-Day--selectedRange:not(.DayPicker-Day--outside).DayPicker-Day--selected,
  .SelectedWeekExample .DayPicker-Day--hoverRange:not(.DayPicker-Day--outside).DayPicker-Day--selected {
    border-radius: 0 !important;
    color: black !important;
  }
  .SelectedWeekExample .DayPicker-Day--hoverRange:hover {
    border-radius: 0 !important;
  }
`}</style>
      </Helmet>
    </>
  );
};

export default DayPickerInput2;

// class DayPickerInput2 extends Component {
//   state = { selectedDay: new Date(), isEmpty: true, isDisabled: false };

//   //   componentDidMount() {
//   //     const { selectedDay } = this.state;

//   //     console.log(selectedDay, 'selectedDay');

//   let tmp = moment(selectedDay).day(0);
//   let tmp2 = moment(selectedDay).day(6);
//   //     console.log(tmp, tmp2, 'tmp');
//   //     // const firstDay = moment(selectedDay[0]).format('MMM D');
//   //     // const lastDay = moment(selectedDay[6]).format('ll');
//   //   }

//   //   componentDidUpdate(prevProps, prevState) {
//   //     const { selectedDay } = this.state;

//   //     if (selectedDay !== prevState.selectedDay) console.log('object');
//   //   }

//   //   {} –{' '}
//   //             {moment(selectedDays[6]).format('ll')}

//   render() {
//     const { selectedDay, isDisabled, isEmpty } = this.state;

//     // console.log(`${firstDay} ${lastDay}`);
//     return (
//   <div>
//     <p>
//       {isEmpty && 'Please type or pick a day'}
//       {!isEmpty && !selectedDay && 'This day is invalid'}
//       {selectedDay && isDisabled && 'This day is disabled'}
//       {selectedDay &&
//         !isDisabled &&
//         `You chose ${selectedDay.toLocaleDateString()}`}
//     </p>
//     <DayPickerInput
//       value={selectedDay}
//       onDayChange={this.handleDayChange}
//       dayPickerProps={{
//         selectedDays: selectedDay,
//       }}
//       formatDate={formatDate}
//       parseDate={parseDate}
//       format="LL"
//       placeholder={`ggg`}
//     />
//   </div>
//     );
//   }
// }

// export default DayPickerInput2;
