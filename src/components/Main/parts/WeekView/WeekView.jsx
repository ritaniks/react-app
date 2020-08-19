import React from 'react';

import DateAndClock from './parts/DateAndClock';
import BarChart from './parts/BarChartWeekView';
import DoughnutChart from './parts/DoughnutChartWeekView';
import ModalWeekView from './parts/ModalWeekView';
import HeaderWeekView from './parts/HeaderWeekView';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import DayPicker from './parts/DayPicker';

// import css from './WeekView.module.scss';
import '../../../../assets/css/_custom.scss';

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
      <div>
        <ModalWeekView />
      </div>

      <HeaderWeekView />

      <DropdownButton id="dropdown-basic-button" title="Week picker">
        <Dropdown.Item>
          <DayPicker />
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default WeekView;
