import React from 'react';

import NextBtn from './buttons/NextBtn';

const SecondStep = ({ counClick, setCounClick }) => {
  return (
    <>
      <fieldset className="fieldset">
        <div className="form-card">
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">
              <b>Invite by Email</b>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-2">
            <b>User Permissions</b>
          </div>
          <div className="row m-0 mb-4">
            <div className="form-check mr-4">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
                onChange={() => console.log('')}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Admin
              </label>
            </div>
            <div className="form-check mr-4">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Manager
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option2"
              />
              <label className="form-check-label" htmlFor="exampleRadios3">
                User
              </label>
            </div>
          </div>
          <button className="btn btn-success btn-lg btn-block invite">
            Send invite
          </button>
        </div>
        {/* <input
          type="button"
          name="next"
          className="next btn btn-primary mt-4 float-right"
          value="Next"
        /> */}
        <NextBtn counClick={counClick} setCounClick={setCounClick} />
      </fieldset>
      {/* <!--                             <input type="button" name="previous" className="previous btn btn-light mt-4 float-right mr-3" value="Previous" /> --> */}
    </>
  );
};

export default SecondStep;
