import React from 'react';

import css from './buttons.module.scss';

const SendInvite = () => {
  const handleClick = e => {
    console.log(e.target, 'SendInvite');
  };
  return (
    <button
      onClick={handleClick}
      className={`${css.btnSend} ${css.buttons} invite`}
      type="submit"
    >
      Send invite
    </button>
  );
};

export default SendInvite;
