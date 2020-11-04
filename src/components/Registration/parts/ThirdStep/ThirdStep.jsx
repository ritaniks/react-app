import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// import { Modal, Button } from 'react-bootstrap';

import Submit from '../../buttons/Submit';
import PrevBtn from '../../buttons/PrevBtn';
import AddProjectModal from './AddProjectModal';

// import MultiSelect from '../../common/MultiSelect/MultiSelect';

// import { ReactComponent as Pen } from '../../../../assets/img/registration/pen.svg';
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

const ThirdStep = ({ countClick, setCountClick, setIsStopOverflow }) => {
  const [clientName, setClientName] = useState('');
  const [clients, setClietns] = useState(dafaultClients);
  const [projects, setProjects] = useState([]);
  const [editId, setEditId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setEditId(id);
  };

  // CRUD
  const deleteClient = id => {
    const newClientsArr = clients.filter(el => el.id !== id);
    setClietns(newClientsArr);
  };
  return (
    <>
      <fieldset>
        <AddProjectModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          editId={editId}
        />
        {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}

        {/* <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Dont even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal> */}
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
          <h5 className="title">Clients</h5>
          <ul className={`${css.items} mb-3`}>
            {clients.map(el => {
              return (
                <li className={css.listItem} key={el.id}>
                  {el.name}
                  <button
                    type="button"
                    className="btn btn-danger btn-sm float-right delete"
                    style={{ width: '2rem', height: '2rem' }}
                    onClick={() => deleteClient(el.id)}
                  >
                    <X />
                  </button>
                  <button
                    className="btn btn-primary btn-sm float-right mr-3 project"
                    type="button"
                    // data-toggle="modal"
                    // data-target="#exampleModal"
                    style={{ height: '2rem' }}
                    onClick={() => addProject(el.id)}
                  >
                    Add Project
                  </button>
                </li>
              );
            })}
          </ul>
          {/* <h5 className="title">Projects</h5>
          <ul className={`${css.items} mb-3`}>
            <li className={css.listItem}>
              <button
                type="button"
                className="btn btn-danger btn-sm float-right delete"
                style={{ width: '2rem', height: '2rem' }}
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
              <div className="pl-3">
                <i className="far fa-user ml-n3"></i> 
                Mark Duffer
              </div>
              <div className="ml-3a pl-3">
                <i className="far fa-file-alt ml-n3"></i>
                General Legal Matters
              </div>
            </li>
          </ul> */}
        </div>

        <div className={css.wrapBtn}>
          <PrevBtn countClick={countClick} setCountClick={setCountClick} />
          <Submit countClick={countClick} setCountClick={setCountClick} />
        </div>
      </fieldset>
    </>
  );
};

ThirdStep.propTypes = {
  countClick: PropTypes.number.isRequired,
  setCountClick: PropTypes.func.isRequired,
  setIsStopOverflow: PropTypes.func.isRequired,
};

export default ThirdStep;
