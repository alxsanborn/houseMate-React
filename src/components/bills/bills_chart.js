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
      case "01":
        lastYearsBillsAggregated[0] += Number(bill.amount)
        break;
      case "02":
        lastYearsBillsAggregated[1] += Number(bill.amount)
        break;
      case "03":
        lastYearsBillsAggregated[2] += Number(bill.amount)
        break;
      case "04":
        lastYearsBillsAggregated[3] += Number(bill.amount)
        break;
      case "05":
        lastYearsBillsAggregated[4] += Number(bill.amount)
        break;
      case "06":
        lastYearsBillsAggregated[5] += Number(bill.amount)
        break;
      case "07":
        lastYearsBillsAggregated[6] += Number(bill.amount)
        break;
      case "08":
        lastYearsBillsAggregated[7] += Number(bill.amount)
        break;
      case "09":
        lastYearsBillsAggregated[8] += Number(bill.amount)
        break;
      case "10":
        lastYearsBillsAggregated[9] += Number(bill.amount)
        break;
      case "11":
        lastYearsBillsAggregated[10] += Number(bill.amount)
        break;
      case "12":
        lastYearsBillsAggregated[11] += Number(bill.amount)
        break;
    }
  })

  let thisYearsBillsAggregated = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  thisYearsBills.forEach(bill=>{
    switch(bill.month) {
      case "01":
        thisYearsBillsAggregated[0] += Number(bill.amount)
        break;
      case "02":
        thisYearsBillsAggregated[1] += Number(bill.amount)
        break;
      case "03":
        thisYearsBillsAggregated[2] += Number(bill.amount)
        break;
      case "04":
        thisYearsBillsAggregated[3] += Number(bill.amount)
        break;
      case "05":
        thisYearsBillsAggregated[4] += Number(bill.amount)
        break;
      case "06":
        thisYearsBillsAggregated[5] += Number(bill.amount)
        break;
      case "07":
        thisYearsBillsAggregated[6] += Number(bill.amount)
        break;
      case "08":
        thisYearsBillsAggregated[7] += Number(bill.amount)
        break;
      case "09":
        thisYearsBillsAggregated[8] += Number(bill.amount)
        break;
      case "10":
        thisYearsBillsAggregated[9] += Number(bill.amount)
        break;
      case "11":
        thisYearsBillsAggregated[10] += Number(bill.amount)
        break;
      case "12":
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
