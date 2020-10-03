import React, { useState } from 'react';

import StartTime from './parts/StartTime';
import EndTime from './parts/EndTime';
import Duration from './parts/Duration';

import { ReactComponent as Plus } from '../../../../../../../assets/img/main/plus.svg';
import { ReactComponent as Search } from '../../../../../../../assets/img/main/search.svg';

import css from './Day.module.scss';

const Day = () => {
  const [selectProject, setSelectProject] = useState('');

  const handleChange = e => {
    setSelectProject(e.target.value);
  };

  return (
    <>
      <div className={css.wrapAddProject}>
        <input
          className={css.search}
          type="text"
          name="search"
          value={selectProject}
          placeholder="Search for Client > Project"
          onChange={handleChange}
          autoComplete="off"
        />
        <div className={css.wrapSearchIcon}>
          <Search />
        </div>
        <button className={css.addProjectBtn} type="button">
          <Plus />
        </button>
      </div>

      <div className={css.wrapStartEndTime}>
        <StartTime />
        <EndTime />
      </div>
      <div className={css.wrapDuration}>
        <Duration />
      </div>
    </>
  );
};

export default Day;
