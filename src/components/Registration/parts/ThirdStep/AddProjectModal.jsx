import React from 'react';
import Modal from 'react-modal';
import Helmet from 'react-helmet';
import css from './AddProjectModal.module.scss';

import { ReactComponent as X } from '../../../../assets/img/registration/x.svg';

// Modal.setAppElement('#root');

// eslint-disable-next-line react/prop-types
const AddProjectModal = ({ isModalOpen, setIsModalOpen, editId }) => {
  const modalToogle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // handlers

  //   const handlerToogleModal = () => {
  //     setIsModalOpen(!isModalOpen);
  //   };
  //   const handlerSubmit = () => {};
  console.log(editId, 'editId');

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
        {/* {editId} */}
        <div className={css.wrapModal}>
          <div className={css.wrapTitle}>
            <h4>Add Project</h4>
            <button type="button" className={`${css.xBtn} btn`}>
              <X />
            </button>
          </div>
          <div>
            <div className={css.wrapProjectNameInput}>
              <input type="text" placeholder="Project name" />
            </div>

            <div className={css.wrapSelectUser}>
              <select type="text" placeholder="User select to project">
                <option>select user</option>
              </select>
            </div>
            <div className={css.wrapRate}>
              <input type="number" placeholder="Rate $" />
            </div>
          </div>
          <div className={css.wrapButtons}>
            <button className={`${css.btnClose} btn`} type="button">
              Close
            </button>
            <button className={`${css.addProjectBtn} btn`} type="button">
              Add Project
            </button>
          </div>
        </div>
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
