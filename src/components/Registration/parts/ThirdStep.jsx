import React from 'react';

const ThirdStep = () => {
  return (
    <>
      <fieldset>
        <div className="form-card">
          <div className="my-0 bd-callout bd-callout-warning mb-3">
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
          <ul id="items" className="list-group mb-3">
            <li className="list-group-item">
              Minh Hong
              <button className="btn btn-danger btn-sm float-right delete">
                X
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
            <li className="list-group-item">
              Mark Duffer
              <button className="btn btn-danger btn-sm float-right delete">
                X
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
            <li className="list-group-item">
              Client XYZ Corp
              <button className="btn btn-danger btn-sm float-right delete">
                X
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
            <li className="list-group-item">
              Mary Molloy
              <button className="btn btn-danger btn-sm float-right delete">
                X
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
          <ul className="list-group" id="items2">
            <li className="list-group-item">
              <button className="btn btn-danger btn-sm float-right delete">
                X
              </button>
              <button
                className="btn btn-primary btn-sm float-right mr-3 project"
                type="button"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <i className="fas fa-pen edit-icon"></i>
              </button>
              <div className="pl-3">
                <i className="far fa-user ml-n3"></i> Mark Duffer
              </div>
              <div className="ml-3a pl-3">
                <i className="far fa-file-alt ml-n3"></i> General Legal Matters
              </div>
            </li>
            <li className="list-group-item">
              <button className="btn btn-danger btn-sm float-right delete">
                X
              </button>
              <button
                className="btn btn-primary btn-sm float-right mr-3 project"
                type="button"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <i className="fas fa-pen edit-icon"></i>
              </button>
              <div className="pl-3">
                <i className="far fa-user ml-n3"></i> Minh Hong (12 Investors)
              </div>
              <div className="ml-3a pl-3">
                <i className="far fa-file-alt ml-n3"></i> Hong, et. al. v.
                Suavei, Inc., Infante and Wong
              </div>
            </li>
            <li className="list-group-item">
              <button className="btn btn-danger btn-sm float-right delete">
                X
              </button>
              <button
                className="btn btn-primary btn-sm float-right mr-3 project"
                type="button"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <i className="fas fa-pen edit-icon"></i>
              </button>
              <div className="ml-3a pl-custom">
                <i className="far fa-folder ml-n-custom"></i> Web design for
                West side project
              </div>
              <div className="ml-4a pl-3">
                <i className="far fa-file-alt ml-n3"></i> Color matching
              </div>
            </li>
            <li className="list-group-item">
              <button className="btn btn-danger btn-sm float-right delete">
                X
              </button>
              <button
                className="btn btn-primary btn-sm float-right mr-3 project"
                type="button"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <i className="fas fa-pen edit-icon"></i>
              </button>
              <div className="pl-3">
                <i className="far fa-user ml-n3"></i> Mary Molloy
              </div>
              <div className="ml-3a pl-3">
                <i className="far fa-file-alt ml-n3"></i> Molloy Family Trust
                Dispute
              </div>
            </li>
          </ul>
        </div>

        <input
          type="button"
          name="next"
          className="next btn btn-success mt-4 float-right"
          value="Submit"
        />
        <input
          type="button"
          name="previous"
          className="previous btn btn-light mt-4 float-right mr-3"
          value="Previous"
        />
      </fieldset>
    </>
  );
};

export default ThirdStep;
