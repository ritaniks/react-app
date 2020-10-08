import React from 'react';

const FourthStep = () => {
  return (
    <>
      <fieldset>
        <div className="form-card">
          <h2 className="text-success text-center">
            <strong>Well Done!</strong>
          </h2>

          <div className="row justify-content-center">
            <div className="text-success" id="thumbs-up">
              <span className="fa fa-thumbs-up"></span>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-10 text-center">
              <h5 className="text-center mt-3 text-muted">
                You Have Successfully Signed Up
              </h5>
            </div>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default FourthStep;
