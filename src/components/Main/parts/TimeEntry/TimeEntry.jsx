import React, { useState } from 'react';

// import DateAndClock from './parts/DateAndClock';
import BarChart from './parts/charts/BarChart';
import DoughnutChart from './parts/charts/DoughnutChart';
// import ModalWeekView from './parts/+ModalWeekView';
import WeekPicker from './parts/topRight/WeekPicker';
import GroupBtn from './parts/topRight/GroupBtn';
import SelectEmployee from './parts/topRight/SelectEmployee';
import ChartBtn from './parts/topLeft/ChartBtn';
import AddUser from './parts/AddUser';

import css from './TimeEntry.module.scss';

import '../../../../assets/css/_custom.scss';

const TimeEntry = () => {
  // const [activeBtn, setActiveBtn] = useState({
  //   period: false,
  //   week: true,
  //   day: false,
  // });

  const [isChartOpen, setIsChartOpen] = useState(true);

  const handleCartBtn = () => {
    setIsChartOpen(!isChartOpen);
  };

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
            <ChartBtn handleCartBtn={handleCartBtn} isChartOpen={isChartOpen} />
          </div>
          <div className={`${css.topRight} `}>
            <SelectEmployee className={css.select} />
            <GroupBtn className={css.wrapGroupBtn} />
          </div>
        </div>
        {/* button + */}
        {isChartOpen && (
          <div className={css.wrapCharts}>
            <BarChart />
            <DoughnutChart />
          </div>
        )}

        <AddUser />
      </div>
      <div>
        {/* to do table */}
        Table
      </div>

      {/* ============================================= */}

      {/* <ModalWeekView /> */}
    </>
  );
};

export default TimeEntry;
