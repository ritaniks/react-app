import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Modal from 'react-modal';

import css from './AddRow.module.scss';

Modal.setAppElement('#root');

const AddRow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        type="button"
        className={`${css.addRow} btn btn-primary`}
      >
        <p>+</p>
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="addUserModal"
        overlayClassName="addUserOverlay"
        closeTimeoutMS={500}
      >
        <div>My modal dialog.</div>
        <div>My modal dialog.</div>
        <div>My modal dialog.</div>
        <div>My modal dialog.</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>

      <Helmet>
        <style>{`
              .addUserModal {
                    position: fixed;
                    top: 25%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border: 1px solid #ccc;
                    background: #fff;
                    overflow: auto;
                    border-radius: 0.25rem;
                    outline: none;
                    padding: 20px;
              }

              .addUserOverlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.25);
              }

              .ReactModal__Overlay {
                    opacity: 0;
                    transition: opacity 500ms ease-in-out;
              }

              .ReactModal__Overlay--after-open {
                    opacity: 1;
              }

              .ReactModal__Overlay--before-close {
                    opacity: 0;
              }
      `}</style>
      </Helmet>
    </>
  );
};

export default AddRow;
