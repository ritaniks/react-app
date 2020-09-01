import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import css from './SendMessage.module.scss';

const SendMessage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log('click');
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.sendMessage}>
      <Button variant="primary" onClick={handleClick}>
        SendMessage
      </Button>

      {isOpen && (
        <div className={css.wrapForm}>
          <div className={css.wrapHead}>
            <h4>Send message</h4>
            <p>
              Please fill out the form below and we will get back to you as soon
              as possible.
            </p>
          </div>
          <form className={css.form}>
            <Button variant="primary" onClick={handleClick}>
              Submit
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SendMessage;
