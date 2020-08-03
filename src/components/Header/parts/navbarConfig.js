export default [
  {
    link: 'link',
    route: '/',
    name: 'Dashboard',
  },
  {
    link: 'linkIn',
    title: 'Time Entry',
    routes: [
      {
        route: '/week_view',
        name: 'Week View',
      },
      {
        route: '/timesheet_period_view',
        name: 'Timesheet Period View',
      },
      {
        route: '/day_view',
        name: 'Day View',
      },
    ],
  },
  {
    link: 'linkIn',
    title: 'Expenses',
    routes: [
      {
        route: '/enter_expenses',
        name: 'Enter Expenses',
      },
      {
        route: '/view_expenses',
        name: 'View Expenses',
      },
      {
        route: '/expense_detail_report',
        name: 'Expense Detail Report',
      },
    ],
  },
  {
    link: 'linkIn',
    title: 'Reports',
    routes: [
      {
        route: '/administrative_reports',
        name: 'Administrative Reports',
      },
      {
        route: '/your_reports',
        name: 'Your Reports',
      },
    ],
  },
  {
    link: 'link',
    route: '/maintenance',
    name: 'Maintenance',
  },
  {
    link: 'link',
    route: '/settings',
    name: 'Settings',
  },
];
