import React, { useState } from 'react';

import BarChart from './parts/charts/BarChart';
import DoughnutChart from './parts/charts/DoughnutChart';
import WeekPicker from './parts/topLeft/WeekPicker';
import OneDayPicker from './parts/topLeft/OneDayPicker';
import GroupBtn from './parts/topRight/GroupBtn';
import SelectEmployee from './parts/topRight/SelectEmployee';
import ChartBtn from './parts/topLeft/ChartBtn';
import AddRow from './parts/AddRow';

// import DateAndClock from './parts/DateAndClock';

import css from './TimeEntry.module.scss';

import '../../../../assets/css/_custom.scss';

const TimeEntry = () => {
  const [checkBtn, setCheckBtn] = useState('week');

  const [isChartOpen, setIsChartOpen] = useState(true);

  const handleChartBtn = () => {
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
            {/* switcher */}
            {/*  &&  TO-DO -> PeriodPicker} */}
            {(checkBtn === 'week' || checkBtn === 'period') && <WeekPicker />}
            {checkBtn === 'day' && <OneDayPicker />}

            <ChartBtn
              handleChartBtn={handleChartBtn}
              isChartOpen={isChartOpen}
            />
          </div>
          <div className={`${css.topRight} `}>
            <SelectEmployee className={css.select} />
            <GroupBtn
              className={css.wrapGroupBtn}
              checkBtn={checkBtn}
              setCheckBtn={setCheckBtn}
            />
          </div>
        </div>
        {/* button + */}
        {isChartOpen && (
          <div className={css.wrapCharts}>
            <BarChart />
            <DoughnutChart />
          </div>
        )}

        <AddRow />
      </div>
      <div className={css.table}>
        {/* to do table */}
        Table
      </div>
    </>
  );
};

export default TimeEntry;
