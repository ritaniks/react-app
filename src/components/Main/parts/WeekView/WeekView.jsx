import React, { useState } from 'react';

import DateAndClock from './parts/DateAndClock';
import BarChart from './parts/BarChartWeekView';
import DoughnutChart from './parts/DoughnutChartWeekView';
import ModalWeekView from './parts/ModalWeekView';
import WeekPicker from './parts/WeekPicker';
import OneDayPicker from './parts/OneDayPicker';
// import WeekPicker from './parts/WeekPicker';

import css from './WeekView.module.scss';

import '../../../../assets/css/_custom.scss';

const WeekView = e => {
  const [activeBtn, setActiveBtn] = useState({
    period: false,
    week: true,
    day: false,
  });

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between">
        {/* this is for future global*/}

        <div>
          <WeekPicker />
        </div>
        {/* <div>
          <DateAndClock />
        </div> */}
        <div>
          <div className={css.settings}>
            {/* <> calendar </> */}
            {/* div -> Chart for  tottal  week hours (billable, non-bilable)*/}
            {/* <div> in
                      select to choose employee 
                      button day & week
            </div> */}

            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary bg-light">
                Period
              </button>
              <button type="button" className="btn btn-secondary bg-light">
                Week
              </button>
              <button type="button" className="btn btn-secondary bg-light">
                Day
              </button>
            </div>
          </div>
          <button className={css.addUser}>start "+ "</button>
        </div>
        {/* <div>
          table
        </div> */}
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
