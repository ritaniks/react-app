import React, { useState } from 'react';
import { ReactComponent as Close } from '../../../assets/img/nonprofit/social/close.svg';
import { ReactComponent as Chat } from '../../../assets/img/nonprofit/social/chat.svg';

import useWindowSize from '../../hooks/useWindowSize';

import css from './SendMessage.module.scss';

const SendMessage = () => {
  const size = useWindowSize().width;

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log('click');
    setIsOpen(!isOpen);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.sendMessage}>
      <button type="button" onClick={handleClick} className="btn btn-primary">
        {size > 768 ? 'Send Message' : <Chat />}
      </button>

      {isOpen && (
        <div className={css.wrapForm}>
          <div className={css.formHead}>
            <h4>Send message</h4>
            <p>
              Please fill out the form below and we will get back to you as soon
              as possible.
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

              <div className={`${css.formItem} w-100`}>
                <textarea
                  id="chatMessage"
                  className={css.formInput}
                  title="Message"
                  maxlength="500"
                  placeholder="* Message"
                  rows="3"
                  required
                ></textarea>
                <label htmlFor="chatMessage" className={css.formLabel}>
                  * Message
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

export default SendMessage;
