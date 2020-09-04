import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../../pages/DashboardPage';
import WeekView from '../../pages/WeekViewPage';
import TimesheetPeriodView from '../../pages/TimesheetPeriodViewPage';
import DayView from '../../pages/DayViewPage';
import EnterExpenses from '../../pages/EnterExpensesPage';
import ViewExpenses from '../../pages/ViewExpensesPage';
import ExpenseDetailReport from '../../pages/ExpenseDetailReportPage';
import AdministrativeReports from '../../pages/AdministrativeReportsPage';
import YourReports from '../../pages/YourReportsPage';
import Maintenance from '../../pages/MaintenancePage';
import Settings from '../../pages/SettingsPage';
import Error from '../../pages/ErrorPage';
import Login from '../../pages/LoginPage';
import Registration from '../../pages/RegistrationPage';
import ForgotPassword from '../../pages/ForgotPasswordPage';

// switcher for routing pages

const RoutesSite = () => (
  <>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      {/* TO-DO - visible link for this route  */}
      <Route path="/login" exact component={Login} />
      {/* TO-DO - visible link for this route  */}
      <Route path="/registration" exact component={Registration} />
      <Route path="/forgot_password" exact component={ForgotPassword} />
      <Route path="/week_view" exact component={WeekView} />
      <Route
        path="/timesheet_period_view"
        exact
        component={TimesheetPeriodView}
      />
      <Route path="/day_view" exact component={DayView} />
      <Route path="/enter_expenses" component={EnterExpenses} />
      <Route path="/view_expenses" component={ViewExpenses} />
      <Route path="/expense_detail_report" component={ExpenseDetailReport} />
      <Route path="/administrative_reports" component={AdministrativeReports} />
      <Route path="/your_reports" component={YourReports} />
      <Route path="/maintenance" component={Maintenance} />
      <Route path="/settings" component={Settings} />
      <Route>
        <Error message="404" />
      </Route>
    </Switch>
  </>
);

export default RoutesSite;
