import React from 'react';

import StepZilla from 'react-stepzilla';

import FirstStep from '../FirstStep';
import SecondStep from '../SecondStep';
import ThirdStep from '../ThirdStep';
import FourthStep from '../FourthStep';

import css from './StartWizard_2.module.scss';
import './StartWizard.css';

const steps = [
  { name: 'Step 1', component: <FirstStep /> },
  { name: 'Step 2', component: <SecondStep /> },
  { name: 'Step 3', component: <ThirdStep /> },
  { name: 'Step 4', component: <FourthStep /> },
];

const Wizard_2 = () => {
  return (
    <>
      <div className={css.step_progress}>
        <StepZilla
          steps={steps}
          stepsNavigation={false}
          // prevBtnOnLastStep={false}
          startAtStep={1}
        />
      </div>
    </>
  );
};

export default Wizard_2;
