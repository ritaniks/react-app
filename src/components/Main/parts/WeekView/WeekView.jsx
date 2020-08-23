import React from 'react';

import DateAndClock from './parts/DateAndClock';
import BarChart from './parts/BarChartWeekView';
import DoughnutChart from './parts/DoughnutChartWeekView';
import ModalWeekView from './parts/ModalWeekView';
import WeekPicker from './parts/WeekPicker';
import OneDayPicker from './parts/OneDayPicker';

// import css from './WeekView.module.scss';

import '../../../../assets/css/_custom.scss';

const WeekView = e => {
  const handleDropdownBtn = e => {
    console.log(e.target.getAttribute('role') === 'button');
    console.log(e.target.getAttribute('role'), 'button222');
    console.log(e.currentTarget, 'button333');

    if (e.target.getAttribute('role') === 'button') {
      e.stopPropagation();
    }
  };
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between">
        <div>
          <DateAndClock />
        </div>
        <div>
          <h3>Timesheet for _userName_ Week View</h3>
        </div>
      </div>
      <div>
        <BarChart />
        <DoughnutChart />
      </div>
      <div>Table</div>
      <div>
        <ModalWeekView />
      </div>
      <WeekPicker />
      <OneDayPicker />
    </div>
  );
};

export default WeekView;
