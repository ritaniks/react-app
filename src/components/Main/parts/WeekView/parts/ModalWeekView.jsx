import React from 'react';

import { connect } from 'react-redux';
import * as globalSelectors from '../../../../../redux/global/globalSelectors';
import * as globalActions from '../../../../../redux/global/globalActions';
import Modal from '../../../../common/Modal/Modal';

const ModalWeekView = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button type="button" onClick={() => setIsOpen()}>
        Show modal 1
      </button>
      {isOpen && <Modal>1111 this is inside props</Modal>}
    </>
  );
};

const mapStateToProps = state => ({
  isOpen: globalSelectors.getIsModalOpenTest(state),
});

const mapDispatchToProps = {
  setIsOpen: globalActions.modalOpenTest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWeekView);
