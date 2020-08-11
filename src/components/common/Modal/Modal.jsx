import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as globalActions from '../../../redux/global/globalActions';
import css from './Modal.module.scss';

const Modal = ({ children, setIsClose }) => {
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
    if (currentTarget && target !== currentTarget) {
      return;
    }
    setIsClose();
  };
  const handleXPress = () => {
    setIsClose();
  };

  return (
    <>
      <div
        role="toolbar"
        aria-label="Закрыть"
        tabIndex={-1}
        className={css.modal_overlay}
        onClick={handleBackdropClick}
        onKeyUp={handleKeyPress}
      >
        <div className={css.modal}>
          <button
            onClick={handleXPress}
            type="button"
            className={`close ${css.iconClose}`}
          >
            <span aria-hidden="true">×</span>
            <span className="sr-only">Close modal</span>
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  setIsClose: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setIsClose: globalActions.modalCloseTest,
};

export default connect(null, mapDispatchToProps)(Modal);
