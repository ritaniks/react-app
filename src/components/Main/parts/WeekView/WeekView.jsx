import React from 'react';

import DateAndClock from './parts/DateAndClock';
import BarChart from './parts/BarChartWeekView';
import DoughnutChart from './parts/DoughnutChartWeekView';
import ModalWeekView from './parts/ModalWeekView';
import WeekPicker from './parts/WeekPicker';
import OneDayPicker from './parts/OneDayPicker';

// import useWindowSize from '../../../hooks/useWindowSize';

// import css from './WeekView.module.scss';
import '../../../../assets/css/_custom.scss';

const WeekView = () => {
  // const size = useWindowSize();
  // console.log(size);

  return (
    <div className="d-flex flex-column">
      {/* {size.width} - width
      {' ------ '}
      {size.height}- height */}
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
