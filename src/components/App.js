import React from 'react';

import Header from './Header/Header';
import Main from './Main/Main';
// import Nonprofit from './Nonprofit/Nonprofit';
import Registration from './Registration/Registration';

import css from './App.module.scss';

const user = {
  name: 'Kristina',
  admin: true,
  auth: false,
  users: [],
};

const App = () => {
  return (
    <div className={`${css.wrapApp}`}>
      {/* {!user.auth && <Nonprofit />} */}
      {!user.auth && <Registration />}

      {user.auth && (
        <>
          <header className={css.header}>
            <Header user={user} />
          </header>

          <main className={css.main}>
            <Main />
          </main>
        </>
      )}
    </div>
  );
};

export default App;
