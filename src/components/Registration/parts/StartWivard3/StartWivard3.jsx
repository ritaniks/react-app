import React from 'react';

import FirstStep from '../FirstStep';
import SecondStep from '../SecondStep';
import ThirdStep from '../ThirdStep';
import FourthStep from '../FourthStep';

import css from './StartWivard3.module.scss';
import './-styleSW.scss';

const StartWivard3 = () => {
  return (
    <>
      {/* HEADER */}
      <header className={`${css.header}`}>
        {/* <div className="inner"> */}
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

        <a className={css.login} href="https://app.timeledger.com/tl/login.asp">
          Log in
        </a>
        {/* </div> */}
      </header>

      <section className={css.wrapTitle}>
        <h2 className={css.headTitle}>Start your Free Trial Now!</h2>{' '}
        {/* id="heading" */}
        <div className={css.headDiscription}>
          14-day Free Trial of the Fully-Featured TimeLedger
        </div>
        <div id="msform">
          {/* <!-- progressbar --> */}
          <ul className={css.progressbar}>
            {/* id="progressbar" */}
            <li className={`${css.signup} ${css.active}`}>
              <strong>Sign up</strong>
            </li>
            <li className={css.invite}>
              <strong>Invite users</strong>
            </li>
            <li className={css.addclients}>
              <strong>Setup</strong>
            </li>
            <li className={css.confirm}>
              <strong>Done</strong>
            </li>
          </ul>

          {/* progress */}
          <div className={css.progress}>
            <div
              className={`${css.progressBar} ${css.progressBarStriped} ${css.progressBarAnimated}`}
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>

          {/* <!-- fieldsets --> */}
          {/* First step (1) */}
          <FirstStep />

          {/* Second step (2) */}
          <SecondStep />

          {/* Third step (3) */}
          <ThirdStep />

          {/* Fouth step (4) */}
          <FourthStep />
        </div>
      </section>
    </>
  );
};

export default StartWivard3;
