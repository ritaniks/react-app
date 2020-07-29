import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../../pages/Dashboard';
import TimeEntry from '../../pages/TimeEntry';
import Expenses from '../../pages/Expenses';
import Reports from '../../pages/Reports';
import Maintenance from '../../pages/Maintenance';
import Settings from '../../pages/Settings';
import Error from '../../pages/Error';

// switcher for routing pages

const RoutesSite = () => (
  <>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/time_entry" exact component={TimeEntry} />
      <Route path="/expenses" component={Expenses} />
      <Route path="/reports" component={Reports} />
      <Route path="/maintenance" component={Maintenance} />
      <Route path="/settings" component={Settings} />

      <Route>
        <Error message="404" />
      </Route>
    </Switch>
  </>
);

export default RoutesSite;
