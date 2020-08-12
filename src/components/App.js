import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

import css from './App.module.scss';

import { connect } from 'react-redux';
import * as testOperations from '../redux/test/testOperations';
import { useEffect } from 'react';

const user = {
  name: 'Kristina',
  admin: true,
  auth: false,
  users: [],
};

const App = ({ fetchTest }) => {
  useEffect(() => {
    fetchTest();
  }, []);

  return (
    <div className={` ${css.wrapApp}`}>
      <header className={css.header}>
        <Header user={user} />
      </header>

      <main className={css.main}>
        <Main />
      </main>
    </div>
  );
};

const mapDispatchToProps = { fetchTest: testOperations.fetchTest };

export default connect(null, mapDispatchToProps)(App);
