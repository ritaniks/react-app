import React, { useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import SendMessage from './SendMessage/SendMessage';

import css from './Nonprofit.module.scss';

const Nonprofit = () => {
  const [isOpenChat, setIsOpenChat] = useState(false);

  const handleClick = () => {
    console.log('click');
    setIsOpenChat(!isOpenChat);
  };

  return (
    <div className={css.wrapNonprofit}>
      <Header />
      <Main isOpenChat={isOpenChat} handleClick={handleClick} />
      <Footer />
      <SendMessage
        isOpenChat={isOpenChat}
        handleClick={handleClick}
        setIsOpenChat={setIsOpenChat}
      />
    </div>
  );
};

export default Nonprofit;
