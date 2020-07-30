import React, { useState } from 'react';

import { Alert } from 'react-bootstrap';

import css from './AlertMessage.module.scss';

const AlertMessage = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className={css.wrapAlertMessage}>
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <p>You have 14 free trial days left. Purchase now</p>
          </Alert>
        </div>
      )}
    </>
  );
};

export default AlertMessage;
