import React, { useState } from 'react';

import BarChart from './parts/charts/BarChart';
import DoughnutChart from './parts/charts/DoughnutChart';

import GroupBtn from './parts/topRight/GroupBtn';
import SelectUserBtn from './parts/topRight/SelectUserBtn';

import PeriodPicker from './parts/topLeft/PeriodPicker';
import WeekPicker from './parts/topLeft/WeekPicker';
import OneDayPicker from './parts/topLeft/OneDayPicker';
import ChartBtn from './parts/topLeft/ChartBtn';
import SelectedDate from './parts/topLeft/SelectedDate';
import StartTimerBtn from './parts/topLeft/StartTimerBtn';

import AddRow from './parts/AddRow';

import Day from './parts/main/Day/Day';

import useWindowSize from '../../../hooks/useWindowSize';

import css from './TimeEntry.module.scss';

import '../../../../assets/css/_custom.scss';

const TimeEntry = () => {
  const widthDivice = useWindowSize().width;

  // Check btn
  const [checkBtn, setCheckBtn] = useState('day');

  const handleChartBtn = () => {
    setIsChartOpen(!isChartOpen);
  };
  // is Chart Open
  const [isChartOpen, setIsChartOpen] = useState(false);

  // selected Date for all Pickers
  const [selectedDate, setSelectedDate] = useState(''); // by default new Date()

  return (
    <>
      <section className={css.top}>
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

            {checkBtn === 'week' && (
              <ChartBtn
                handleChartBtn={handleChartBtn}
                isChartOpen={isChartOpen}
              />
            )}
            {checkBtn === 'day' && <StartTimerBtn />}
          </div>
          <div className={`${css.topRight} `}>
            <GroupBtn
              className={css.wrapGroupBtn}
              checkBtn={checkBtn}
              setCheckBtn={setCheckBtn}
            />
            <SelectUserBtn widthDivice={widthDivice} />
          </div>
        </div>

        {isChartOpen && (
          <div className={css.wrapCharts}>
            <BarChart />
            <DoughnutChart />
          </div>
        )}

        {checkBtn === 'week' && <AddRow />}
      </section>

      <section>
        {checkBtn === 'week' && (
          <div className={css.table}>
            {/* to do table */}
            Table
          </div>
        )}
        {checkBtn === 'day' && (
          <div className={css.wrapDay}>
            <Day />
          </div>
        )}
      </section>
    </>
  );
};

export default TimeEntry;
