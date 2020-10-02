import React from 'react';

// import css from './StartWivard_3.module.scss';

const StartWivard_3 = () => {
  return (
    <>
      {/* HEADER */}
      <header className="masthead pt-3 px-3 px-sm-4">
        <div className="inner">
          <a className="masthead-brand" href="#" target="_blank" />
          <img
            src="https://i.ibb.co/p2C1Sjv/TL-logo-2x.png"
            width="120"
            height="36"
            alt="TimeLedger logo"
          />
          <a className="float-right text-right pt-2 pr-0 text-muted" href="#">
            Log in
          </a>
        </div>
      </header>

      <div className="card px-0 mt-3 pb-0 mb-4">
        <h2 id="heading">Start your Free Trial Now!</h2>
        <div>14-day Free Trial of the Fully-Featured TimeLedger</div>
        <div id="msform" className="mt-4">
          {/* <!-- progressbar --> */}
          <ul id="progressbar">
            <li className="active" id="signup">
              <strong>Sign up</strong>
            </li>
            <li id="invite">
              <strong>Invite users</strong>
            </li>
            <li id="addclients">
              <strong>Setup</strong>
            </li>
            <li id="confirm">
              <strong>Done</strong>
            </li>
          </ul>
          <div className="progress mb-4">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          {/* <!-- fieldsets --> */}
          <fieldset>
            <div className="form-card">
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">
                  <b>Email is your Username</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group mb-0">
                <label for="exampleInputPassword1">
                  <b>Create Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            <input
              type="button"
              name="next"
              className="next btn btn-primary mt-4 float-right"
              value="Next"
            />
          </fieldset>
          <fieldset>
            <div className="form-card">
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">
                  <b>Invite by Email</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-2">
                <b>User Permissions</b>
              </div>
              <div className="row m-0 mb-4">
                <div className="form-check mr-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" for="exampleRadios1">
                    Admin
                  </label>
                </div>
                <div className="form-check mr-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Manager
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option2"
                  />
                  <label className="form-check-label" for="exampleRadios3">
                    User
                  </label>
                </div>
              </div>
              <a className="btn btn-success btn-lg btn-block invite">
                Send invite
              </a>
            </div>
            <input
              type="button"
              name="next"
              className="next btn btn-primary mt-4 float-right"
              value="Next"
            />
            {/* <!--                             <input type="button" name="previous" className="previous btn btn-light mt-4 float-right mr-3" value="Previous" /> --> */}
          </fieldset>
          <fieldset>
            <div className="form-card">
              <div className="my-0 bd-callout bd-callout-warning mb-3">
                You will be able to add more details by logging in to the full
                TL desktop version
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
                    <i className="far fa-file-alt ml-n3"></i> General Legal
                    Matters
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
                    <i className="far fa-user ml-n3"></i> Minh Hong (12
                    Investors)
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
                    <i className="far fa-file-alt ml-n3"></i> Molloy Family
                    Trust Dispute
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
          <fieldset>
            <div className="form-card">
              <h2 className="text-success text-center">
                <strong>Well Done!</strong>
              </h2>

              <div className="row justify-content-center">
                <div className="text-success" id="thumbs-up">
                  <span className="fa fa-thumbs-up"></span>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-10 text-center">
                  <h5 className="text-center mt-3 text-muted">
                    You Have Successfully Signed Up
                  </h5>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default StartWivard_3;
