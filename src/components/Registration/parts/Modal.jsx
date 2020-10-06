import React from 'react';

const Modal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-light">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Project
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body pb-2">
              <form>
                <div className="form-group mb-3 mt-2">
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Project name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="my-multi-select">
                    <b>Assign Users</b>
                  </label>
                  <select
                    multiple
                    className="form-control multiselect"
                    id="my-multi-select"
                    name="options[]"
                  >
                    <option defaultValue>All</option>
                    <option>Coreen Wright</option>
                    <option>Courtney Van</option>
                    <option>John Doe</option>
                  </select>
                </div>

                <label htmlFor="amount">
                  <b>Enter a billing rate for user</b>
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    id="amount"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer border-0 mb-2 p-3">
              <button
                type="button"
                className="btn btn-light mr-3 m-0"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary m-0">
                Add Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
