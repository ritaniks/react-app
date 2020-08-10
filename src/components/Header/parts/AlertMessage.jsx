import React, { useState } from 'react';

import { Alert } from 'react-bootstrap';

import css from './AlertMessage.module.scss';
// import '../../../assets/css/_custom.scss';

const AlertMessage = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className={css.wrapAlertMessage}>
          <Alert
            className={alert}
            variant="light"
            onClose={() => setShow(false)}
            dismissible
          >
            <form className="f0875 text-danger form-inline d-flex justify-content-center">
              <p>You have 14 free trial days left. </p>
              <button
                className="btn btn-outline-primary btn-sm mx-2"
                type="submit"
              >
                Purchase now
              </button>
            </form>
          </Alert>
        </div>
      )}
    </>
  );
};

export default AlertMessage;
