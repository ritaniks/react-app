import React, { useState } from 'react';

import BarChart from './parts/charts/BarChart';
import DoughnutChart from './parts/charts/DoughnutChart';

import PeriodPicker from './parts/topLeft/PeriodPicker';
import WeekPicker from './parts/topLeft/WeekPicker';
import OneDayPicker from './parts/topLeft/OneDayPicker';

import GroupBtn from './parts/topRight/GroupBtn';
import SelectEmployee from './parts/topRight/SelectEmployee';
import ChartBtn from './parts/topLeft/ChartBtn';
import AddRow from './parts/AddRow';
import SelectedDate from './parts/topLeft/SelectedDate';

import useWindowSize from '../../../hooks/useWindowSize';

import css from './TimeEntry.module.scss';

import '../../../../assets/css/_custom.scss';

const TimeEntry = () => {
  const widthDivice = useWindowSize().width;

  // Check btn
  const [checkBtn, setCheckBtn] = useState('week');

  const handleChartBtn = () => {
    setIsChartOpen(!isChartOpen);
  };
  // is Chart Open
  const [isChartOpen, setIsChartOpen] = useState(true);

  // selected Date for all Pickers
  const [selectedDate, setSelectedDate] = useState(''); // by default new Date()

  return (
    <>
      <div className={css.top}>
        {widthDivice < 768 && <SelectedDate selectedDate={selectedDate} />}
        <div className={css.settings}>
          <div className={`${css.topLeft} `}>
            {/* switcher Pickers*/}
            {checkBtn === 'period' && (
              <PeriodPicker
                checkBtn={checkBtn}
                widthDivice={widthDivice}
                setSelectedDate={setSelectedDate}
              />
            )}
            {checkBtn === 'week' && (
              <WeekPicker
                checkBtn={checkBtn}
                widthDivice={widthDivice}
                setSelectedDate={setSelectedDate}
              />
            )}
            {checkBtn === 'day' && (
              <OneDayPicker
                checkBtn={checkBtn}
                widthDivice={widthDivice}
                setSelectedDate={setSelectedDate}
              />
            )}

            <ChartBtn
              handleChartBtn={handleChartBtn}
              isChartOpen={isChartOpen}
            />
          </div>
          <div className={`${css.topRight} `}>
            <GroupBtn
              className={css.wrapGroupBtn}
              checkBtn={checkBtn}
              setCheckBtn={setCheckBtn}
            />
            <SelectEmployee className={css.select} />
          </div>
        </div>

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
