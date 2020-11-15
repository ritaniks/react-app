import React from 'react';
import PropTypes from 'prop-types';

import NextBtn from '../../buttons/NextBtn';

// import css from './steps.module.scss';

const FirstStep = ({ countClick, setCountClick }) => {
  return (
    <>
      <fieldset>
        <div className="form-card">
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail">
              <b>Email is your Username</b>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group mb-0">
            <label htmlFor="exampleInputPassword1">
              <b>Create Password</b>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </div>
        <NextBtn countClick={countClick} setCountClick={setCountClick} />
      </fieldset>
    </>
  );
};
FirstStep.propTypes = {
  countClick: PropTypes.number.isRequired,
  setCountClick: PropTypes.func.isRequired,
};

export default FirstStep;
