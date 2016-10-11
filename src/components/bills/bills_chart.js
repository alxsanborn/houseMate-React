import React from 'react';
import {Bar} from 'react-chartjs-2';

const BillsChart = (props) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {data: [150, 125, 300, 250, 300, 95, 150, 75, 200, 200, 199, 75],
      backgroundColor: "#FF6384",
      hoverBackgroundColor: "#FF6384",
      label: 2015
    },
    {data: [175, 140, 275, 300, 300, 100, 175, 90, 225, 200, 225, 100],
    backgroundColor: "#FF7",
    hoverBackgroundColor: "#FF6384",
    label: 2016
    }
    ]
  }

  const options = {
        scales: {
            yAxes: [
              {
                  ticks: {
                     callback: function(label, index, labels) {
                       return '$' + label;
                     }
                  }
              }
            ]
        },

    }

  return (
    <Bar data={data} options={options} />
  )
}

export default BillsChart;
