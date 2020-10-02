import React, { useState } from 'react';
import Helmet from 'react-helmet';

import Modal from 'react-modal';

import StartWizard_3 from './parts/StartWivard_3/StartWivard_3';

import css from './Registration.module.scss';

Modal.setAppElement('#root');

const Registration = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="firstEnterInTrail"
        overlayClassName="firstTrailOverlay"
        closeTimeoutMS={400}
      >
        <StartWizard_3 />
        {/* BTN -> "CLOSE MODAL" */}
        {/* <button onClick={toggleModal}>Close modal</button> */}
      </Modal>
      <Helmet>
        <style>{`
              .firstEnterInTrail {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border: 1px solid #ccc;
                    background: #fff;
                    overflow: auto;
                    border-radius: 0.25rem;
                    outline: none;
                    padding: 20px;
                    height: 80%;
                    width: 80%
              }

              .firstTrailOverlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.125);
              }

      
      `}</style>
      </Helmet>
    </>
  );
};

export default Registration;
