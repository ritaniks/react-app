import React from 'react';

import RoutesSite from './parts/RoutesSite';

import css from './Main.module.scss';

const Main = () => {
  return (
    <div className={css.wrapMain}>
      <RoutesSite />
    </div>
  );
};

export default Main;
