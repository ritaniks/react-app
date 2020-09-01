import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ReactComponent as Close } from '../../../assets/img/nonprofit/social/close.svg';
// import { ReactComponent as Chat } from '../../../assets/img/nonprofit/social/chat.svg';
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
        Send Message
      </Button>

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
          <Form className={css.form}>
            <div className={css.formBorder}>
              <Form.Group controlId="formMessageEmail">
                <Form.Control type="email" placeholder="* Email" />
              </Form.Group>
              <Form.Group controlId="formMessagePassword">
                <Form.Control type="password" placeholder="* Password" />
              </Form.Group>
              <Button className="w-100" variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
          {/* <form className={css.form}>
            <Button variant="primary">Submit</Button>
          </form> */}
        </div>
      )}
    </div>
  );
};

export default SendMessage;
