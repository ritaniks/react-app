import React from 'react';

// import css from './GroupBtn.module.scss';

const BtnGroup = () => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-secondary bg-light">
        Period
      </button>
      <button type="button" className="btn btn-secondary bg-light">
        Week
      </button>
      <button type="button" className="btn btn-secondary bg-light">
        Day
      </button>
    </div>
  );
};

export default BtnGroup;
