import React from 'react';

import { Link } from 'react-router-dom';

// import css from './Login.module.scss';

const Login = () => {
  return (
    <div>
      <h2>Login TimeLedger</h2>
      <form>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We&apos;ll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="passworInput">Password</label>
          <input type="password" className="form-control" id="passworInput" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="checkSsl" />
          <label className="form-check-label" htmlFor="checkSsl">
            Use 128-bi SSL Security
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="d-flex justify-content-between">
        <Link to="/forgot_password">Forgot password?</Link>
        or
        <Link to="/registration">Registration</Link>
      </div>
    </div>
  );
};

export default Login;
