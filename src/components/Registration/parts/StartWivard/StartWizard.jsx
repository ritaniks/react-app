import React, { useState, useEffect } from 'react';

import Modal from './parts/Modal';

import FirstStep from './parts/steps/FirstStep';
import SecondStep from './parts/steps/SecondStep';
import ThirdStep from './parts/steps/ThirdStep';
import FourthStep from './parts/steps/FourthStep';

import css from './StartWizard.module.scss';
import './-styleSW.scss';
// import './helperSW';

const StartWizard3 = () => {
  const [countClick, setCountClick] = useState(3);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((100 / 4) * countClick);
  }, [countClick]);

  return (
    <div>
      {console.log(countClick, 'countClick')}
      {/* data-gr-c-s-loaded="true" */}
      <Modal />
      <div className="cover-container d-flex w-100 mb-auto mx-auto flex-column bg-white  rounded">
        {/* HEADER */}
        <header className={`${css.header} masthead pt-3 px-3 px-sm-4`}>
          <div className={css.inner}>
            <a
              className={css.logo}
              href="https://app.timeledger.com/tl/login.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/p2C1Sjv/TL-logo-2x.png"
                width="120"
                height="36"
                alt="TimeLedger logo"
              />
            </a>

            <a
              className={css.login}
              href="https://app.timeledger.com/tl/login.asp"
            >
              Log in
            </a>
          </div>
        </header>

        <section className={css.wrapTitle}>
          <h2 className={css.headTitle}>Start your Free Trial Now!</h2>
          <div className={css.headDiscription}>
            14-day Free Trial of the Fully-Featured TimeLedger
          </div>
          <div id="msform" className={css.msform}>
            <ul id="progressbar">
              <li className="active" id="signup">
                <strong>Sign up</strong>
              </li>
              <li className={countClick >= 2 ? 'active' : ''} id="invite">
                <strong>Invite users</strong>
              </li>
              <li className={countClick >= 3 ? 'active' : ''} id="addclients">
                <strong>Setup</strong>
              </li>
              <li className={countClick >= 4 ? 'active' : ''} id="confirm">
                <strong>Done</strong>
              </li>
            </ul>

            {/* progress */}
            <div className="progress mb-4">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            {/* progress */}

            {/* <!-- fieldsets --> */}
            {/* First step (1) */}
            {countClick === 1 && (
              <FirstStep
                countClick={countClick}
                setCountClick={setCountClick}
              />
            )}

            {/* Second step (2) */}
            {countClick === 2 && (
              <SecondStep
                countClick={countClick}
                setCountClick={setCountClick}
              />
            )}

            {/* Third step (3) */}
            {countClick === 3 && (
              <ThirdStep
                countClick={countClick}
                setCountClick={setCountClick}
              />
            )}

            {/* Fouth step (4) */}
            {countClick === 4 && <FourthStep />}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StartWizard3;
