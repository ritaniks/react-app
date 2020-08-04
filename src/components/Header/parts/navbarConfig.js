import React from 'react';

import { ReactComponent as Dashboard } from '../../../assets/img/header/dashboard.svg';
import { ReactComponent as Clock } from '../../../assets/img/header/clock.svg';
import { ReactComponent as Dollar } from '../../../assets/img/header/dollar.svg';
import { ReactComponent as ChartPie } from '../../../assets/img/header/chart-pie.svg';
import { ReactComponent as Briefcase } from '../../../assets/img/header/briefcase.svg';
import { ReactComponent as Settings } from '../../../assets/img/header/settings.svg';
import css from './NavBar.module.scss';

export function switchIcon(icon) {
  switch (icon) {
    case 'Dashboard':
      return <Dashboard className={css.icon} />;
    case 'Clock':
      return <Clock className={css.icon} />;
    case 'Dollar':
      return <Dollar className={css.icon} />;
    case 'ChartPie':
      return <ChartPie className={css.icon} />;
    case 'Briefcase':
      return <Briefcase className={css.icon} />;
    case 'Settings':
      return <Settings className={css.icon} />;
    default:
      return '';
  }
}

export const links = [
  {
    id: '1',
    link: 'link',
    route: '/',
    name: 'Dashboard',
    icon: 'Dashboard',
  },
  {
    id: '2',
    link: 'linkIn',
    title: 'Time Entry',
    icon: 'Clock',
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
    id: '3',
    link: 'linkIn',
    title: 'Expenses',
    icon: 'Dollar',
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
    id: '4',
    link: 'linkIn',
    title: 'Reports',
    icon: 'ChartPie',
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
    id: '5',
    link: 'link',
    route: '/maintenance',
    name: 'Maintenance',
    icon: 'Briefcase',
  },
  {
    id: '6',
    link: 'link',
    route: '/settings',
    name: 'Settings',
    icon: 'Settings',
  },
];
