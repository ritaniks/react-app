import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [
    {
      data: [300, 500, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const DoughnutChart = () => {
  return (
    <div>
      <h2>Doughnut Example</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
