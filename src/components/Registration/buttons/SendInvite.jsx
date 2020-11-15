import React from 'react';

import css from './buttons.module.scss';

const SendInvite = () => {
  return (
    <button className={`${css.btnSend} ${css.buttons} invite`} type="submit">
      Send invite
    </button>
  );
};

export default SendInvite;
