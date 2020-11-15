import React from 'react';

import { ReactComponent as ThumbsUp } from '../../../../assets/img/registration/thumbs-up.svg';

import css from './FourthStep.module.scss';

const FourthStep = () => {
  return (
    <>
      <fieldset>
        <div className="form-card">
          <h2 className="text-success text-center">
            <strong>Well Done!</strong>
          </h2>

          <div className="row justify-content-center">
            <div className={css.thumbsUp}>
              {/* <span className="fa fa-thumbs-up">5</span> */}
              <ThumbsUp />
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
