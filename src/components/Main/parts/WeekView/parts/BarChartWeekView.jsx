import React from 'react';
import { Bar } from 'react-chartjs-2';
// import BarChart from '../../../../common/Charts/BarChart';

import css from './BarChartWeekView.module.scss';

const BarChartWeekView = () => {
  const data = {
    // type: 'bar',
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Billable',
        backgroundColor: 'rgba(32, 201, 151, 0.6)',
        borderColor: '#ddd',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(32, 201, 151, 0.8)',
        // hoverBorderColor: 'rgba(255,99,132,1)',
        data: [4, 2, 8, 6, 4, 8, 5],
      },
      {
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
      maintainAspectRatio: false,
      legend: {
        fullWidth: true,
      },
      toolTip: {
        // shared: true, // disable here.
      },

      plugins: {
        labels: {
          render: 'value',
          fontSize: 0,
          fontStyle: 'bold',
          fontColor: '#545454',
        },
      },

      scales: {
        xAxes: [
          {
            ticks: {
              maxRotation: 0,
            },
            gridLines: {
              display: false,
            },
            stacked: true,
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 3,
            },
            gridLines: {},
            stacked: true,
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
