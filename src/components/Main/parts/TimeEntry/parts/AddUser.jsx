import React from 'react';

import css from './AddUser.module.scss';

const AddUser = () => {
  return (
    <button type="button" className={`${css.addUser} btn btn-primary`}>
      <p>+</p>
    </button>
  );
};

export default AddUser;
