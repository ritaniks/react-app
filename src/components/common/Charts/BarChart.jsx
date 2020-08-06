import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const BarChart = () => {
  return (
    <div>
      <h2>Bar Example (custom size)</h2>
      <Bar
        styles={{ width: '200px', height: '200px' }}
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: false,
          },

          scales: {
            xAxes: [
              {
                ticks: {
                  display: false,
                  //   maxTicksLimit: 3,
                },
                gridLines: {
                  //   color: 'rgba(0, 0, 0, 0)',
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  display: false,
                  beginAtZero: true,
                  //   maxTicksLimit: 3,
                },
                gridLines: {
                  //   color: 'rgba(0, 0, 0, 0)',
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default BarChart;
