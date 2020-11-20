import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import MultiSelectMobile from './MultiSelectMobile';
// import { v4 as uuidv4 } from 'uuid';
// uuidv4();

import css from './AddProjectModal.module.scss';

import { ReactComponent as X } from '../../../../assets/img/registration/x.svg';
import { ReactComponent as Dollar } from '../../../../assets/img/header/dollar.svg';

// Modal.setAppElement('#root');

// eslint-disable-next-line
const AddProjectModal = ({
  isModalOpen,
  setIsModalOpen,
  projects,
  setProjects,
  clientId,
}) => {
  const [projectName, setProjectName] = useState('');
  const [choiseUsers, setChoiseUsers] = useState([]);
  // const [userIds, setUserIds] = useState([]);
  const [rate, setRate] = useState('');

  useEffect(() => {
    // setUserId(clientId);
  }, []);

  const modalToogle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // handlers

  const handlerToogleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handlerSubmit = e => {
    e.preventDefault();
    console.log(projectName, 'projectName');
    // console.log(choiseUsers, "choiseUsers")
    // console.log(userId, 'userId');
    console.log(rate, 'rate');

    const newProject = {
      projectName,
      rate,
    };

    setProjects([...projects, newProject]);

    setProjectName('');
    setRate('');
    // setUserIds([]);
    setChoiseUsers([]);
    handlerToogleModal();
  };
  // eslint-disable-next-line no-console
  // console.log(clientId, 'clientId');

  // handlers for inputs
  const handlerProjectName = e => {
    setProjectName(e.target.value);
  };
  const handlerAddUsers = () => {};
  const handlerRate = e => {
    // console.log(e.target, 'e.target');
    setRate(e.target.value);
  };
  // project name input handler
  // choise users in project
  // handler rate
  //
  // const handleChange = e => {
  //   const { name, value, type, checked } = e.target;

  //   this.setState({
  //     [name]: type === 'checkbox' ? checked : value,
  //   });
  // };

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
        {console.log(clientId, 'clientId')}
        {/* {console.log(userId, 'userId')} */}
        <form onSubmit={handlerSubmit} className={css.wrapModal}>
          <div className={css.wrapTitle}>
            <h5>Add Project</h5>
            <button
              onClick={handlerToogleModal}
              type="button"
              className={`${css.xBtn} btn`}
            >
              <X />
            </button>
          </div>
          <div className={css.wrapAddProjectMain}>
            <div className={css.wrapProjectNameInput}>
              <input
                type="text"
                placeholder="Project name"
                onChange={handlerProjectName}
              />
            </div>
            <div className={css.wrapSelectUser}>
              <h6>Assign Users</h6>
              <MultiSelectMobile />
            </div>
            <div className={css.wrapRate}>
              <h6>Enter a billing rate for user</h6>
              <div className={css.wrapRateInput}>
                <button type="button" className={`${css.dollarBtn} btn`}>
                  <Dollar />
                </button>
                <input
                  type="number"
                  value={rate}
                  onChange={handlerRate}
                  placeholder="0"
                />
              </div>
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
            <button className={`${css.addProjectBtn} btn`} type="submit">
              Add Project
            </button>
          </div>
        </form>
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
                    width: 100%;
                    height: 100vh;
                    border-radius: 0.5rem;
                    @media (min-width: 1000px) {
                      width: 80%;
                    }
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
AddProjectModal.defaultProps = {
  clientId: '',
};

AddProjectModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  setProjects: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.any).isRequired,
  clientId: PropTypes.string,
};

export default AddProjectModal;
