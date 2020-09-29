import React, { useState } from 'react';

import { ReactComponent as Play } from '../../../../../../assets/img/main/play.svg';
import { ReactComponent as Stop } from '../../../../../../assets/img/main/stop.svg';

import css from './StartTimerBtn.module.scss';

const StartTimerBtn = () => {
  const [check, setCheck] = useState(true);

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <>
      {check ? (
        <button
          onClick={handleCheck}
          type="button"
          className={`${css.btn} ${css.green}`}
        >
          <p>Start timer</p>

          <div className={css.wrapIcon}>
            <Play />
          </div>
        </button>
      ) : (
        <button
          onClick={handleCheck}
          type="button"
          className={`${css.btn} ${css.red}`}
        >
          <p>Stop timer</p>

          <div className={css.wrapIcon}>
            <Stop />
          </div>
        </button>
      )}
    </>
  );
};

export default StartTimerBtn;
