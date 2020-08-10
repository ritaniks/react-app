import React from 'react';
// import css from './WeekView.module.scss';
import DateAndClock from './parts/DateAndClock';
import BarChart from './parts/BarChartWeekView';
import DoughnutChart from './parts/DoughnutChartWeekView';

const WeekView = () => {
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
    </div>
  );
};

export default WeekView;
