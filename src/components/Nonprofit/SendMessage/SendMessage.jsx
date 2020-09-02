import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Close } from '../../../assets/img/nonprofit/svg/close.svg';
import { ReactComponent as Chat } from '../../../assets/img/nonprofit/svg/chat.svg';

import useWindowSize from '../../hooks/useWindowSize';

import css from './SendMessage.module.scss';

const SendMessage = ({ handleClick, isOpenChat, setIsOpenChat }) => {
  const size = useWindowSize().width;

  const handleSubmit = e => {
    e.preventDefault();
    setIsOpenChat(!isOpenChat);
  };

  return (
    <div className={css.sendMessage}>
      <button type="button" onClick={handleClick} className="btn btn-primary">
        {size > 768 ? 'Click to chat!' : <Chat />}
      </button>

      {isOpenChat && (
        <div className={css.wrapForm}>
          <div className={css.formHead}>
            <h4>Click to chat!</h4>
            <p>
              We are live and ready to chat with you now. Type something to
              start a live chat.
            </p>
            <div className={css.wrapClose} onClick={handleClick}>
              <Close />
            </div>
          </div>
          <form onSubmit={handleSubmit} className={css.form}>
            <div className={css.formBorder}>
              <div className={`${css.formItem} w-100`}>
                <input
                  id="chatEmail"
                  className={css.formInput}
                  type="email"
                  required
                  placeholder="* Email"
                />
                <label htmlFor="chatEmail" className={css.formLabel}>
                  * Email
                </label>
              </div>

              <div className={`${css.formItem} w-100`}>
                <input
                  id="chatPassword"
                  className={css.formInput}
                  type="password"
                  required
                  placeholder="* Password"
                />
                <label htmlFor="chatPassword" className={css.formLabel}>
                  * Password
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
SendMessage.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isOpenChat: PropTypes.bool.isRequired,
  setIsOpenChat: PropTypes.func.isRequired,
};

export default SendMessage;
