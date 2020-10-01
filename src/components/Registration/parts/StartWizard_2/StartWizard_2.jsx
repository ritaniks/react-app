import React from 'react';

import StepZilla from 'react-stepzilla';

import FirstStep from '../FirstStep';
import SecondStep from '../SecondStep';
import ThirdStep from '../ThirdStep';
import FourthStep from '../FourthStep';

import css from './StartWizard_2.module.scss';

const steps = [
  { name: 'Step ', component: <FirstStep /> },
  { name: 'Step ', component: <SecondStep /> },
  { name: 'Step ', component: <ThirdStep /> },
  { name: 'Step ', component: <FourthStep /> },
];

const Wizard_2 = () => {
  return (
    <>
      <div className="step-progress">
        {/* <StepZilla
          steps={steps}
          stepsNavigation={false}
          prevBtnOnLastStep={false}
          startAtStep={1}
        /> */}
      </div>
      <div className={css.wizard}>
        {/* <StepZilla
          steps={steps}
          stepsNavigation={false}
          prevBtnOnLastStep={false}
          startAtStep={1}
        /> */}
        <StepZilla steps={steps} />
      </div>
    </>
  );
};

export default Wizard_2;
