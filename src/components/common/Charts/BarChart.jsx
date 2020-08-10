import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    type: 'bar',
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
      // responsive: true,
      //   maintainAspectRatio: false, // виключає анимацію charta
      // responsive: true,
      maintainAspectRatio: false,
      legend: {
        // display: false,
        // position: 'left',
        fullWidth: true,
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
              // display: false,
              // maxTicksLimit: 2,
              maxRotation: 0, // вирівнює написи під колонками
            },
            gridLines: {
              display: false, // забирає сітку
            },
            stacked: true, // стовпець один над одним
            // categoryPercentage: 1.0, // забирають пробіли між колонками
            // barPercentage: 1.0,      // забирають пробіли між колонками
          },
        ],
        yAxes: [
          {
            ticks: {
              // display: false,
              beginAtZero: true,
              maxTicksLimit: 3,
            },
            gridLines: {
              // display: false, // забирає сітку
            },
            stacked: true, // стовпець один над одним
          },
        ],
      },
    },
  };

  return (
    <div styles={{ display: 'block', height: '250px', width: '500px' }}>
      <h2>Week hours:</h2>
      <Bar data={data} width={600} height={200} options={barOptions.options} />
    </div>
  );
};

export default BarChart;
