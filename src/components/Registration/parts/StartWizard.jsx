import React from 'react';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';

import ReactWizard from 'react-bootstrap-wizard';

import 'react-bootstrap-wizard/dist/react-wizard.css';

// var steps = [
//   // this step hasn't got a isValidated() function, so it will be considered to be true
//   { stepName: 'First', component: FirstStep },
//   // this step will be validated to false
//   { stepName: 'Second', component: SecondStep },
//   // this step will never be reachable because of the seconds isValidated() steps function that will always return false
//   { stepName: 'Third', component: ThirdStep },
//   { stepName: 'Fouth', component: FourthStep },
// ];
var steps = [
  {
    stepName: 'About',
    stepIcon: 'tim-icons icon-single-02',
    component: FirstStep,
  },
  {
    stepName: 'Account',
    stepIcon: 'tim-icons icon-settings-gear-63',
    component: SecondStep,
  },
  {
    stepName: 'Address',
    stepIcon: 'tim-icons icon-delivery-fast',
    component: ThirdStep,
    stepProp: {
      prop1: true,
      prop2: 'A string',
    },
  },
];

const StartWizard = () => {
  const finishButtonClick = allStates => {
    console.log(allStates);
  };

  return (
    <>
      <ReactWizard
        steps={steps}
        navSteps
        title="react-wizard"
        description="This will help you split a complicated flow or a complicated form in multiple steps."
        headerTextCenter
        validate
        color="primary"
        finishButtonClick={finishButtonClick}
      />
    </>
  );
};

export default StartWizard;
