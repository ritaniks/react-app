import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as globalSelectors from '../../../../../redux/global/globalSelectors';
import * as globalActions from '../../../../../redux/global/globalActions';
import Modal from '../../../../common/Modal/Modal';

const ModalWeekView = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button type="button" onClick={() => setIsOpen()}>
        Show modal
      </button>
      {isOpen && <Modal>--- this is inside props.children for Modal ---</Modal>}
    </>
  );
};

ModalWeekView.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOpen: globalSelectors.getIsModalOpenTest(state),
});

const mapDispatchToProps = {
  setIsOpen: globalActions.modalOpenTest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWeekView);
