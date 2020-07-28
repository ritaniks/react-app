import React from "react";

import css from "./AlertMessage.module.scss";

const AlertMessage = () => {
  return (
    <div className={css.wrapAlertMessage}>
      <p>You have 14 free trial days left. Purchase now</p>
    </div>
  );
};

export default AlertMessage;
