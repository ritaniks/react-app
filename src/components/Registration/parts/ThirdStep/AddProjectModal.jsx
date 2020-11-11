import React from 'react';
import Modal from 'react-modal';
import Helmet from 'react-helmet';
import MultiSelectMobile from './MultiSelectMobile';
import useWindowSize from '../../../hooks/useWindowSize';

import css from './AddProjectModal.module.scss';

import { ReactComponent as X } from '../../../../assets/img/registration/x.svg';
import { ReactComponent as Dollar } from '../../../../assets/img/header/dollar.svg';

// Modal.setAppElement('#root');

// eslint-disable-next-line
const AddProjectModal = ({ isModalOpen, setIsModalOpen, editId }) => {
  const widthDivice = useWindowSize().width;
  console.log(widthDivice, 'widthDivice');

  const modalToogle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // handlers

  const handlerToogleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  //   const handlerSubmit = () => {};
  // eslint-disable-next-line no-console
  // console.log(editId, 'editId');

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
            <button
              onClick={handlerToogleModal}
              type="button"
              className={`${css.xBtn} btn`}
            >
              <X />
            </button>
          </div>
          <div>
            <div className={css.wrapProjectNameInput}>
              <input type="text" placeholder="Project name" />
            </div>

            <div className={css.wrapSelectUser}>
              <MultiSelectMobile />
            </div>
            <div className={css.wrapRate}>
              <button type="button" className={`${css.dollarBtn} btn`}>
                <Dollar />
              </button>
              <input type="number" />
            </div>
          </div>
          <div className={css.wrapButtons}>
            <button
              onClick={handlerToogleModal}
              type="button"
              className={`${css.btnClose} btn`}
            >
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
                    border-radius: 0.5rem;
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
