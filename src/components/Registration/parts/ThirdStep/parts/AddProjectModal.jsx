import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import MultiSelectMobile from './MultiSelectMobile';

import css from './AddProjectModal.module.scss';

import { ReactComponent as X } from '../../../../../assets/img/registration/x.svg';
import { ReactComponent as Dollar } from '../../../../../assets/img/header/dollar.svg';

// eslint-disable-next-line
const AddProjectModal = ({
  isModalOpen,
  setIsModalOpen,
  projects,
  setProjects,
  globalUsers,
  editProject,
  setEditProject,
}) => {
  const [projectName, setProjectName] = useState('');
  const [rate, setRate] = useState();

  const [selectUsersIds, setSelectUsersIds] = useState([]);

  useEffect(() => {
    if (editProject) {
      setProjectName(editProject.projectName);
      setRate(editProject.rate);
    }
  }, [editProject]);

  const modalToogle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // handlers

  const handlerToogleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handlerSubmit = e => {
    e.preventDefault();

    if (editProject) {
      const newUpdateProjects = projects.map(el => {
        if (el.id !== editProject.id) return el;
        return {
          ...el,
          rate,
          projectName,
          users: selectUsersIds,
        };
      });

      setProjects(newUpdateProjects);
    } else {
      const newProject = {
        projectName,
        rate,
        id: uuidv4(),
        users: [...selectUsersIds],
      };

      setProjects([...projects, newProject]);
    }

    handlerToogleModal();

    // reset
    setTimeout(() => {
      setProjectName('');
      setRate('');
      setSelectUsersIds([]);
      setEditProject();
    }, 1000);
  };
  // eslint-disable-next-line no-console

  // handlers for inputs
  const handlerProjectName = e => {
    setProjectName(e.target.value);
  };

  const handlerRate = e => {
    setRate(e.target.value);
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
                value={projectName}
                placeholder="Project name"
                onChange={handlerProjectName}
              />
            </div>
            <div className={css.wrapSelectUser}>
              <h6>Assign Users</h6>
              <MultiSelectMobile
                setSelectUsersIds={setSelectUsersIds}
                selectUsersIds={selectUsersIds}
                globalUsers={globalUsers}
              />
            </div>
            <div className={css.wrapRate}>
              <h6>Enter project budget</h6>
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
  globalUsers: {},
  editProject: undefined,
};

AddProjectModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  setProjects: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.any).isRequired,
  globalUsers: PropTypes.shape(PropTypes.any.isRequired),
  editProject: PropTypes.shape(PropTypes.any.isRequired),
  setEditProject: PropTypes.func.isRequired,
};

export default AddProjectModal;
