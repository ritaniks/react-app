import React from 'react';
import PropTypes from 'prop-types';

import css from './buttons.module.scss';

const SendInvite = ({ handleSubmit }) => {
  const handleClick = e => {
    console.log(e.target, 'SendInvite');
  };
  return (
    <button
      onClick={handleSubmit}
      // onSubmit={handleSubmit}
      className={`${css.btnSend} ${css.buttons} invite`}
      type="submit"
    >
      Send invite
    </button>
  );
};

SendInvite.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SendInvite;
