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
    route: '/',
    name: 'Dashboard',
    icon: 'Dashboard',
  },
  {
    id: '2',
    icon: 'Clock',
    route: '/time_entry',
    name: 'Time Entry',
  },
  {
    id: '3',
    icon: 'Dollar',
    route: '/expenses',
    name: 'Expenses',
  },
  {
    id: '4',
    icon: 'ChartPie',
    route: '/report',
    name: 'Report',
  },
  {
    id: '5',
    route: '/maintenance',
    name: 'Maintenance',
    icon: 'Briefcase',
  },
  {
    id: '6',
    route: '/settings',
    name: 'Settings',
    icon: 'Settings',
  },
];
