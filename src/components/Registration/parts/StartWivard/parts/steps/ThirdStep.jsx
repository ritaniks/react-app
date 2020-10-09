import React from 'react';
import PropTypes from 'prop-types';

import Submit from '../../../buttons/Submit';
import PrevBtn from '../../../buttons/PrevBtn';

import { ReactComponent as Pen } from '../../../../../../assets/img/registration/pen.svg';
import { ReactComponent as X } from '../../../../../../assets/img/registration/x.svg';
// import { ReactComponent as Folder } from '../../../../../../assets/img/registration/folder.svg';
// import { ReactComponent as File } from '../../../../../../assets/img/registration/file-alt.svg';
// import { ReactComponent as User } from '../../../../../../assets/img/registration/user.svg';

import css from './steps.module.scss';

const ThirdStep = ({ countClick, setCountClick }) => {
  return (
    <>
      <fieldset>
        <div className="form-card">
          <div
            className={`${css.bdCallout} my-0 bd-callout bd-callout-warning mb-3`}
          >
            You will be able to add more details by logging in to the full TL
            desktop version
          </div>
          <h5 className="title">Add Client</h5>
          <form id="addForm">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Client name"
                aria-label="Client name"
                aria-describedby="button-addon2"
                id="item"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="submit"
                  id="button-addon2"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
          <h5 className="title">Clients</h5>
          <ul className={`${css.items} mb-3`}>
            <li className={css.listItem}>
              Minh Hong
              <button
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
              >
                Add Project
              </button>
            </li>
          </ul>
          <h5 className="title">Projects</h5>
          <ul className={`${css.items} mb-3`}>
            <li className={css.listItem}>
              <button
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
                <i className="far fa-user ml-n3"></i> Mark Duffer
              </div>
              <div className="ml-3a pl-3">
                <i className="far fa-file-alt ml-n3"></i> General Legal Matters
              </div>
            </li>
          </ul>
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
};

export default ThirdStep;
