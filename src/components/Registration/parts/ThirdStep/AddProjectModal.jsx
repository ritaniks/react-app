import React from 'react';
import Modal from 'react-modal';
import Helmet from 'react-helmet';

// Modal.setAppElement('#root');

// eslint-disable-next-line react/prop-types
const AddProjectModal = ({ isModalOpen, setIsModalOpen, editId }) => {
  const modalToogle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={modalToogle}
        contentLabel="My dialog"
        className="AddProjectModal"
        overlayClassName="modalOverlay"
        closeTimeoutMS={100}
      >
        Modal edit for client id {editId}
      </Modal>
      <Helmet>
        <style>{`
              .AddProjectModal {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: #fff;
                    overflow: auto;
                    outline: none;
                    height: 70%;
                    width: 80%;
              }

              .modalOverlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.1);
                    z-index: 1;
              }
      `}</style>
      </Helmet>
    </>
  );
};

export default AddProjectModal;
