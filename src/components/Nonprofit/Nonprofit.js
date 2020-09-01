import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import SendMessage from './SendMessage/SendMessage';

import css from './Nonprofit.module.scss';

const Nonprofit = () => {
  return (
    <div className={css.wrapNonprofit}>
      <Header />
      <Main />
      <Footer />
      {/* <div className={css.sendMessage}>
        {' '} */}
      <SendMessage />
      {/* </div> */}
    </div>
  );
};

export default Nonprofit;
