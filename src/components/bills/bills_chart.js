import React from 'react';
import {Bar} from 'react-chartjs-2';
import Moment from 'moment';

const BillsChart = (props) => {
  let lastYearsBills = props.bills.filter(bill => {
    return bill.year === "2015";
  })

  let thisYearsBills = props.bills.filter(bill => {
    return bill.year === "2016";
  })

  let lastYearsBillsAggregated = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  lastYearsBills.forEach(bill=>{
    switch(bill.month) {
      case "Jan":
        lastYearsBillsAggregated[0] += Number(bill.amount)
        break;
      case "Feb":
        lastYearsBillsAggregated[1] += Number(bill.amount)
        break;
      case "Mar":
        lastYearsBillsAggregated[2] += Number(bill.amount)
        break;
      case "Apr":
        lastYearsBillsAggregated[3] += Number(bill.amount)
        break;
      case "May":
        lastYearsBillsAggregated[4] += Number(bill.amount)
        break;
      case "Jun":
        lastYearsBillsAggregated[5] += Number(bill.amount)
        break;
      case "Jul":
        lastYearsBillsAggregated[6] += Number(bill.amount)
        break;
      case "Aug":
        lastYearsBillsAggregated[7] += Number(bill.amount)
        break;
      case "Sep":
        lastYearsBillsAggregated[8] += Number(bill.amount)
        break;
      case "Oct":
        lastYearsBillsAggregated[9] += Number(bill.amount)
        break;
      case "Nov":
        lastYearsBillsAggregated[10] += Number(bill.amount)
        break;
      case "Dec":
        lastYearsBillsAggregated[11] += Number(bill.amount)
        break;
    }
  })

  let thisYearsBillsAggregated = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  thisYearsBills.forEach(bill=>{
    switch(bill.month) {
      case "Jan":
        thisYearsBillsAggregated[0] += Number(bill.amount)
        break;
      case "Feb":
        thisYearsBillsAggregated[1] += Number(bill.amount)
        break;
      case "Mar":
        thisYearsBillsAggregated[2] += Number(bill.amount)
        break;
      case "Apr":
        thisYearsBillsAggregated[3] += Number(bill.amount)
        break;
      case "May":
        thisYearsBillsAggregated[4] += Number(bill.amount)
        break;
      case "Jun":
        thisYearsBillsAggregated[5] += Number(bill.amount)
        break;
      case "Jul":
        thisYearsBillsAggregated[6] += Number(bill.amount)
        break;
      case "Aug":
        thisYearsBillsAggregated[7] += Number(bill.amount)
        break;
      case "Sep":
        thisYearsBillsAggregated[8] += Number(bill.amount)
        break;
      case "Oct":
        thisYearsBillsAggregated[9] += Number(bill.amount)
        break;
      case "Nov":
        thisYearsBillsAggregated[10] += Number(bill.amount)
        break;
      case "Dec":
        thisYearsBillsAggregated[11] += Number(bill.amount)
        break;
    }
  })

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {data: lastYearsBillsAggregated,
      backgroundColor: "#FF6384",
      hoverBackgroundColor: "#FF6384",
      label: 2015
    },
    {data: thisYearsBillsAggregated,
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
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}

export default BillsChart;
