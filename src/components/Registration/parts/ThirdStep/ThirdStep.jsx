import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Submit from '../../buttons/Submit';
import PrevBtn from '../../buttons/PrevBtn';
import AddProjectModal from './parts/AddProjectModal';
// import useWindowSize from '../../../hooks/useWindowSize';

import { ReactComponent as Pen } from '../../../../assets/img/registration/pen.svg';
import { ReactComponent as X } from '../../../../assets/img/registration/x.svg';
// import { ReactComponent as Folder } from '../../../../../assets/img/registration/folder.svg';
// import { ReactComponent as File } from '../../../../../assets/img/registration/file-alt.svg';
// import { ReactComponent as User } from '../../../../../assets/img/registration/user.svg';

// import css from './steps.module.scss';
import css from './ThirdStep.module.scss';

const dafaultClients = [
  { name: 'Minh Hong', id: '1' },
  { name: 'Mark Duffer', id: '2' },
  { name: 'Jon White', id: '3' },
];
const dafaultProject = [
  { projectName: 'Alatyr', id: '111', users: [1, 2], rate: '100000' },
  { projectName: 'Mami.ua', id: '222', users: [], rate: '500000' },
  { projectName: 'Mumi-fish', id: '333', users: [], rate: '800000' },
];

// eslint-disable-next-line no-unused-vars
const ThirdStep = ({
  countClick,
  setCountClick,
  // setIsStopOverflow,
  globalUsers,
}) => {
  const [clientName, setClientName] = useState('');
  const [clients, setClietns] = useState(dafaultClients);
  const [projects, setProjects] = useState(dafaultProject);
  const [editProject, setEditProject] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectUsersIds, setSelectUsersIds] = useState();

  //  TODO
  // const widthDivice = useWindowSize().width;
  // console.log(widthDivice, 'widthDivice');

  const handleChangeClient = e => {
    setClientName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (clientName === '') {
      return;
    }
    const newClient = { name: clientName, id: uuidv4() };
    setClietns([...clients, newClient]);
    setClientName('');
  };

  // CRUD
  const deleteClient = id => {
    const newClientsArr = clients.filter(el => el.id !== id);
    setClietns(newClientsArr);
  };

  const addProject = el => {
    setIsModalOpen(true);
    if (el) {
      setEditProject(el);

      setSelectUsersIds([...el.users]);
    }
  };
  const deleteProject = id => {
    const newProjectArr = projects.filter(el => el.id !== id);
    setProjects(newProjectArr);
  };

  return (
    <>
      <fieldset>
        <AddProjectModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          projects={projects}
          setProjects={setProjects}
          globalUsers={globalUsers}
          editProject={editProject}
          setEditProject={setEditProject}
          selectUsersIds={selectUsersIds}
          setSelectUsersIds={setSelectUsersIds}
        />
        {/* {console.log(projects, 'projects')} */}
        <div className="form-card">
          <div
            className={`${css.bdCallout} my-0 bd-callout bd-callout-warning mb-3`}
          >
            You will be able to add more details by logging in to the full TL
            desktop version
          </div>
          <h5 className="title">Add Client</h5>
          <form id="addForm" onSubmit={handleSubmit} className="mb-3 d-flex">
            {/* <MultiSelect css={css} setIsStopOverflow={setIsStopOverflow} /> */}
            <input
              type="text"
              className={`${css.addClientInput} form-control`}
              onChange={handleChangeClient}
              value={clientName}
            />
            <button
              className={`${css.addClientBtn} btn btn-primary`}
              type="submit"
              id="button-addon2"
            >
              Add
            </button>
          </form>

          {clients.length > 0 && (
            <>
              <h5 className="title">Clients</h5>
              <ul className={`${css.items} mb-3`}>
                {clients.map(el => {
                  return (
                    <li className={css.listItem} key={el.id}>
                      {el.name}
                      <button
                        type="button"
                        className="btn btn-danger btn-sm float-right delete"
                        style={{ fill: '#fff', width: '2rem', height: '2rem' }}
                        onClick={() => deleteClient(el.id)}
                      >
                        <X />
                      </button>

                      <button
                        className="btn btn-primary btn-sm float-right mr-3 project"
                        type="button"
                        style={{ height: '2rem' }}
                        onClick={() => addProject()}
                      >
                        Add Project
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}

          {projects.length > 0 && (
            <>
              <h5 className="title">Projects</h5>

              <ul className={`${css.items} mb-3`}>
                {projects.map(el => {
                  return (
                    <li key={el.id} className={css.listItem}>
                      {el.projectName} -&gt; {el.rate}$
                      <button
                        onClick={() => deleteProject(el.id)}
                        type="button"
                        className="btn btn-danger btn-sm float-right "
                        style={{ fill: '#fff', width: '2rem', height: '2rem' }}
                      >
                        <X />
                      </button>
                      <button
                        className="btn btn-primary btn-sm float-right mr-3 project"
                        type="button"
                        onClick={() => addProject(el)}
                        style={{ width: '2rem', height: '2rem' }}
                      >
                        <Pen />
                      </button>
                      {/* <div className="pl-3">
                    <i className="far fa-user ml-n3"></i>
                    Mark Duffer
                  </div>
                  <div className="ml-3a pl-3">
                    <i className="far fa-file-alt ml-n3"></i>
                    General Legal Matters
                  </div> */}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>

        <div className={css.wrapBtn}>
          <PrevBtn countClick={countClick} setCountClick={setCountClick} />
          <Submit countClick={countClick} setCountClick={setCountClick} />
        </div>
      </fieldset>
    </>
  );
};

ThirdStep.defaultProps = {
  globalUsers: undefined,
};

ThirdStep.propTypes = {
  countClick: PropTypes.number.isRequired,
  setCountClick: PropTypes.func.isRequired,
  // setIsStopOverflow: PropTypes.func.isRequired,
  globalUsers: PropTypes.shape(PropTypes.any.isRequired),
};

export default ThirdStep;
