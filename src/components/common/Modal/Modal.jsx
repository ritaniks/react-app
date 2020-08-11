import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as globalActions from '../../../redux/global/globalActions';
import css from './Modal.module.scss';

const Modal = ({ children, setIsClose }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    setIsClose();
  };

  const handleBackdropClick = ({ target, currentTarget }) => {
    console.log(target, 'target');
    if (currentTarget && target !== currentTarget) {
      return;
    }
    setIsClose();
  };

  return (
    <>
      {/* {isModalOpen && ( */}
      <div
        role="toolbar"
        aria-label="Закрыть"
        tabIndex={-1}
        className={css.modal_overlay}
        onClick={handleBackdropClick}
        onKeyUp={handleKeyPress}
      >
        <div className={css.modal}>{children}</div>
      </div>
      {/* )} */}
    </>
  );
};

const mapDispatchToProps = {
  setIsClose: globalActions.modalCloseTest,
};

export default connect(null, mapDispatchToProps)(Modal);
