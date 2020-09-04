import React from 'react';
import { Bar } from 'react-chartjs-2';

import css from './BarChartWeekView.module.scss';

const BarChartWeekView = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        stack: 'Stack 0',
        label: 'Billable',
        backgroundColor: 'rgba(32, 201, 151, 0.6)',
        borderColor: '#ddd',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(32, 201, 151, 0.8)',
        // hoverBorderColor: 'rgba(255,99,132,1)',
        data: [4.5, 2.2, 8.1, 6.15, 4.13, 3.5, 5.12],
      },
      {
        stack: 'Stack 0',
        label: 'Non-Billable',
        backgroundColor: 'rgba(23, 162, 184, 0.6)',
        borderColor: '#ddd',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(23, 162, 184, 0.8)',
        // hoverBorderColor: 'rgba(255,99,132,1)',
        data: [4, 2, 8, 6, 4, 8, 5],
      },
    ],
  };

  const barOptions = {
    options: {
      responsive: true,
      plugins: {
        labels: {
          fontSize: 0,
        },
      },
      tooltips: {
        mode: 'index',
        intersect: true,
        callbacks: {
          footer: tooltipItem => {
            const firstVal = tooltipItem[0].value;
            const secondVal = tooltipItem[1].value;
            const sum = Math.ceil((firstVal + secondVal) * 100) / 100;
            return `Total Hours: ${sum}`;
          },
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              maxRotation: 0,
            },
            stacked: true,
          },
        ],
        yAxes: [
          {
            ticks: {
              stepSize: 8,
              min: 0,
              max: 24,
            },
          },
        ],
      },
    },
  };
  return (
    <div className={css.wrapBar}>
      <h2>Week hours:</h2>
      <Bar data={data} width={500} height={150} options={barOptions.options} />
    </div>
  );
};

export default BarChartWeekView;
