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
    // <div className="btn-group" data-toggle="buttons">
    //   <label className="btn btn-primary active">Apple</label>
    //   <input type="radio" name="options" id="option1" checked />
    //   <label className="btn btn-primary">
    //     Samsung
    //     <input type="radio" name="options" id="option2" />
    //   </label>
    //   <label className="btn btn-primary">
    //     Sony
    //     <input type="radio" name="options" id="option3" />
    //   </label>
    // </div>
  );
};

export default BtnGroup;
