import React, { useState } from 'react';

import Modal from './parts/Modal';

import FirstStep from './parts/FirstStep';
import SecondStep from './parts/SecondStep';
import ThirdStep from './parts/ThirdStep';
import FourthStep from './parts/FourthStep';

import css from './StartWizard3.module.scss';
import './-styleSW.scss';
// import './helperSW';

const StartWizard3 = () => {
  const [counClick, setCounClick] = useState(0);
  return (
    <div>
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
          <h2 id="heading" className={css.headTitle}>
            Start your Free Trial Now!
          </h2>
          <div className={css.headDiscription}>
            14-day Free Trial of the Fully-Featured TimeLedger
          </div>
          <div id="msform">
            <ul id="progressbar">
              <li className="active" id="signup">
                <strong>Sign up</strong>
              </li>
              <li id="invite">
                <strong>Invite users</strong>
              </li>
              <li id="addclients">
                <strong>Setup</strong>
              </li>
              <li id="confirm">
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
                style={{ width: '25%' }}
              ></div>
            </div>
            {/* progress */}

            {/* <!-- fieldsets --> */}
            {/* First step (1) */}
            {counClick === 0 && (
              <FirstStep counClick={counClick} setCounClick={setCounClick} />
            )}

            {/* Second step (2) */}
            {counClick === 1 && (
              <SecondStep counClick={counClick} setCounClick={setCounClick} />
            )}

            {/* Third step (3) */}
            {counClick === 2 && (
              <ThirdStep counClick={counClick} setCounClick={setCounClick} />
            )}

            {/* Fouth step (4) */}
            {counClick === 3 && <FourthStep />}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StartWizard3;
