import React from 'react';

import NextBtn from './buttons/NextBtn';
// import PrevBtn from './buttons/PrevBtn';
import SendInvite from './buttons/SendInvite';

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

          <SendInvite />
        </div>
        {/* if you need Previous Page */}
        {/* <PrevBtn counClick={counClick} setCounClick={setCounClick} /> */}
        <NextBtn counClick={counClick} setCounClick={setCounClick} />
      </fieldset>
    </>
  );
};

export default SecondStep;
