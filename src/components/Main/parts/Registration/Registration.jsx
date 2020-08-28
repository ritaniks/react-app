import React from 'react';
import { Link } from 'react-router-dom';
// import css from './Registration.module.scss'

const Registration = () => {
  return (
    <div>
      <h2>Registration</h2>
      <div>
        <Link to="/login">Back to LOGIN</Link>
      </div>
    </div>
  );
};

export default Registration;
