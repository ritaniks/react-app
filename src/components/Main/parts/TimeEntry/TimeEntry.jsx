import React, { useState } from 'react';

// import DateAndClock from './parts/DateAndClock';
import BarChart from './parts/BarChartWeekView';
import DoughnutChart from './parts/DoughnutChartWeekView';
import ModalWeekView from './parts/ModalWeekView';
import WeekPicker from './parts/WeekPicker';
import OneDayPicker from './parts/OneDayPicker';
import GroupBtn from './parts/GroupBtn';
import SelectEmployee from './parts/SelectEmployee';
import OpenChartBtn from './parts/OpenChartBtn';

import css from './TimeEntry.module.scss';

import '../../../../assets/css/_custom.scss';

const TimeEntry = () => {
  const [activeBtn, setActiveBtn] = useState({
    period: false,
    week: true,
    day: false,
  });

  return (
    <>
      {/* this is for future global*/}
      {/* <div>
                  <DateAndClock />
                </div> */}

      <div className={css.top}>
        <div className={css.settings}>
          <div className={`${css.topLeft} `}>
            <WeekPicker />
            <OpenChartBtn />
          </div>
          <div className={`${css.topRight} `}>
            <SelectEmployee />
            <GroupBtn />
          </div>
        </div>
        <button className={css.addUser}>start "+ "</button>
      </div>
      {/* <div>
                  table
                </div> */}

      {/* ============================================= */}
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
    </>
  );
};

export default TimeEntry;
