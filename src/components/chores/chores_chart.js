import React from 'react';
import {Pie} from 'react-chartjs-2';


const ChoresChart = (props) => {
  const data = {
    labels: ["Gentian", "Alice", "Alex"],
    datasets: [
      {data: [2, 5, 11],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ],
      hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
      label: "chores"
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: "Chore Distribution for this Month",
      fontFamily: "Roboto",
      fontSize: 20,
    }
  }

  return (
    <Pie data={data} options={options} />
  )
}

export default ChoresChart;
