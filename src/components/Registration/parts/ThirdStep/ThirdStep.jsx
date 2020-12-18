import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// import { Modal, Button } from 'react-bootstrap';

import Submit from '../../buttons/Submit';
import PrevBtn from '../../buttons/PrevBtn';
import AddProjectModalMob from './parts/AddProjectModal';
// import useWindowSize from '../../../hooks/useWindowSize';

// import MultiSelect from '../../common/MultiSelect/MultiSelect';

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
  { projectName: 'Alatyr', id: '111', users: [], rate: '100000' },
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
  // eslint-disable-next-line no-unused-vars
  const [projects, setProjects] = useState(dafaultProject);
  const [clientId, setClientId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const widthDivice = useWindowSize().width;
  // console.log(widthDivice, 'widthDivice');
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
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

  const addProject = id => {
    // console.log(id, 'addProject');
    setIsModalOpen(true);
    setClientId(id);
  };

  // CRUD Client
  const deleteClient = id => {
    const newClientsArr = clients.filter(el => el.id !== id);
    setClietns(newClientsArr);
  };

  // CRUD Project
  return (
    <>
      <fieldset>
        <AddProjectModalMob
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          projects={projects}
          clientId={clientId}
          setProjects={setProjects}
          globalUsers={globalUsers}
        />
        {console.log(projects, 'projects')}
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
                        onClick={() => addProject(el.id)}
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
                      {el.projectName}
                      <button
                        type="button"
                        className="btn btn-danger btn-sm float-right "
                        style={{ fill: '#fff', width: '2rem', height: '2rem' }}
                      >
                        <X />
                      </button>
                      <button
                        className="btn btn-primary btn-sm float-right mr-3 project"
                        type="button"
                        data-toggle="modal"
                        data-target="#exampleModal"
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
  globalUsers: {},
};

ThirdStep.propTypes = {
  countClick: PropTypes.number.isRequired,
  setCountClick: PropTypes.func.isRequired,
  // setIsStopOverflow: PropTypes.func.isRequired,
  globalUsers: PropTypes.shape(PropTypes.any.isRequired),
};

export default ThirdStep;
