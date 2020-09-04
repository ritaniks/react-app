import React from 'react';
import { Link } from 'react-router-dom';

// import css from './ForgotPassword.module.scss';

const ForgotPassword = () => {
  return (
    <div>
      <h2>Recover Password</h2>
      <div className="form-group">
        <input type="text" placeholder="User name" className="form-control" />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      <div>
        <Link to="/login">Back to LOGIN</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
