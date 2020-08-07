import React from 'react';

import { Doughnut } from 'react-chartjs-2';

import css from './DoughnutChartWeekView.module.scss';

const DoughnutChartWeekView = () => {
  const data = {
    labels: ['Billable', 'Non-Billable'],
    datasets: [
      {
        data: [30, 25],
        backgroundColor: ['rgba(32, 201, 151, 0.6)', 'rgba(23, 162, 184, 0.6)'],
        hoverBackgroundColor: [
          'rgba(32, 201, 151, 0.8)',
          'rgba(23, 162, 184, 0.8)',
        ],
        borderColor: '#ddd',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
      },
    },
    plugins: {
      labels: {
        fontSize: 0,
      },
    },
    tooltips: {
      callbacks: {
        label: item => {
          const label = data.labels[item.index];
          const hours = data.datasets[item.datasetIndex].data[item.index];
          const dataset = data.datasets[0];
          const pecent = Math.round(
            // eslint-disable-next-line dot-notation
            (dataset.data[item.index] / dataset['_meta'][1].total) * 100,
          );
          return `${label}: ${hours} hr (${pecent}%)`;
        },
      },
    },
  };

  return (
    <div className={css.wrapDoughnut}>
      <h2>Hours summary:</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChartWeekView;
