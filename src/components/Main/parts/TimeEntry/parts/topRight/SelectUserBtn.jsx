import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as UserIcon } from '../../../../../../assets/img/header/user.svg';
import { ReactComponent as ArrowIcon } from '../../../../../../assets/img/main/arrows/arrow-bottom.svg';

import css from './SelectUserBtn.module.scss';

const SelectUserBtn = ({ widthDivice = 320 }) => {
  const node = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectUser, setSelectUser] = useState('select');

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line
  }, [selectUser]);

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  return (
    <div ref={node} className={css.wrapSelectUserBtn}>
      <button onClick={handleToogle} className={css.btn} type="button">
        {widthDivice < 768 ? (
          <div className={css.wrapIcon}>
            <UserIcon />
          </div>
        ) : (
          selectUser
        )}
        <div className={css.wrapIcon}>
          <ArrowIcon />
        </div>
      </button>

      {isOpen && (
        <ul className={css.wrapList}>
          <li>111</li>
          <li>222</li>
          <li>333</li>
        </ul>
      )}
    </div>
  );
};

SelectUserBtn.propTypes = {
  widthDivice: PropTypes.number,
};

export default SelectUserBtn;
