import React, { useState, useEffect } from 'react';

import cn from 'classnames';
import FirstStep from './parts/FirstStep/FirstStep';
import SecondStep from './parts/SecondStep/SecondStep';
import ThirdStep from './parts/ThirdStep/ThirdStep';
import FourthStep from './parts/FourthStep/FourthStep';

import css from './Registration.module.scss';
import './globalSW.scss';

const tmpUsers = {
  managers: [
    { name: 'Tom', checked: false, role: 'managers', id: 2 },
    // { name: 'And', checked: false, role: 'managers', id: 55 },
    // { name: 'Jerry', checked: false, role: 'managers', id: 56 },
  ],

  users: [
    { name: 'Elis', checked: false, role: 'users', id: 3 },
    { name: 'Jonny', checked: false, role: 'users', id: 4 },
    // { name: 'David', checked: false, role: 'users', id: 7 },
    // { name: 'Carter', checked: false, role: 'users', id: 8 },
    // { name: 'Evelyn', checked: false, role: 'users', id: 9 },
    // { name: 'Scarlett', checked: false, role: 'users', id: 10 },
    // { name: 'Eleanor', checked: false, role: 'users', id: 11 },
    // { name: 'Kingston', checked: false, role: 'users', id: 12 },
    // { name: 'Julian', checked: false, role: 'users', id: 13 },
    // { name: 'Lincoln', checked: false, role: 'users', id: 14 },
    // { name: 'Addison', checked: false, role: 'users', id: 15 },
  ],
  admins: [{ name: 'Christian', checked: false, role: 'admins', id: 1 }],
};

const Registration = () => {
  const [countClick, setCountClick] = useState(3);
  const [countProject, setCountProject] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isStopOverflow, setIsStopOverflow] = useState(false);
  const [globalUsers, setGlobalUsers] = useState(tmpUsers);

  useEffect(() => {
    setProgress((100 / 4) * countClick);
  }, [countClick]);

  return (
    <div className={css.wrapRegistration}>
      <div
        className={cn(
          css.registration,
          'container',
          isStopOverflow && css.overflow,
        )}
      >
        {/* HEADER */}
        <header className={`${css.header}`}>
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
            {/* progress */}
            <div className={`progress ${css.progress}`}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* progress */}
            <ul id="progressbar" className={css.progressIcon}>
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
                globalUsers={globalUsers}
                setGlobalUsers={setGlobalUsers}
                countProject={countProject}
                setCountProject={setCountProject}
              />
            )}

            {/* Third step (3) */}
            {countClick === 3 && (
              <ThirdStep
                countClick={countClick}
                setCountClick={setCountClick}
                setIsStopOverflow={setIsStopOverflow}
                globalUsers={globalUsers}
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

export default Registration;
