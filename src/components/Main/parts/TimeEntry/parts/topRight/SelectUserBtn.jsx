import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as UserIcon } from '../../../../../../assets/img/header/user.svg';
import { ReactComponent as ArrowIcon } from '../../../../../../assets/img/main/arrows/arrow-bottom.svg';

import css from './SelectUserBtn.module.scss';

const users = ['Jon', 'Zoi', 'Tom', 'Elize', 'Richard', 'Dzamshud'];

const SelectUserBtn = ({ widthDivice = 320 }) => {
  const node = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectUser, setSelectUser] = useState('select');
  const [searchWord, setSearchWord] = useState('');

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
    setSearchWord('');
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
  const handleSelect = e => {
    const newUser = e.target.textContent;
    setSelectUser(newUser);
    setIsOpen(false);
  };
  // filter by name
  const handleChangeInput = e => {
    setSearchWord(e.target.value);
  };

  const filterByName = (text, el) => {
    if (text === '') {
      return true;
    }
    return el.toLowerCase().includes(text.toLowerCase());
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
          <li>
            <input
              type="text"
              name="search"
              value={searchWord}
              placeholder="Filter by name ..."
              onChange={handleChangeInput}
              autoComplete="off"
              style={{ width: '100%' }}
            />
          </li>
          {users.map((el, index) => (
            <div key={index}>
              {filterByName(searchWord, el) && (
                <li onClick={handleSelect}>{el}</li>
              )}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

SelectUserBtn.propTypes = {
  widthDivice: PropTypes.number,
};

export default SelectUserBtn;
