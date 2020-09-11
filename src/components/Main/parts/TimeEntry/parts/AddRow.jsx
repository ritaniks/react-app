import React from 'react';

import css from './AddRow.module.scss';

const AddRow = () => {
  return (
    <button type="button" className={`${css.addRow} btn btn-primary`}>
      <p>+</p>
    </button>
  );
};

export default AddRow;
