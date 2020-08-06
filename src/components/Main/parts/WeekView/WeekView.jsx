import React from 'react';
// import css from './WeekView.module.scss';
import BarChart from './parts/BarChartWeekView';
import DoughnutChart from './parts/DoughnutChartWeekView';

const WeekView = () => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between">
        <div>Clock</div>
        <div>Title</div>
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
