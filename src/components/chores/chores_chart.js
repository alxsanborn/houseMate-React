import React from 'react';
import {Pie} from 'react-chartjs-2';
import Moment from 'moment';


const ChoresChart = (props) => {
  let chores;

  if (props.groupMembers){
    chores = props.groupMembers.map(member => {
      return member.current_month_assigned_chores.length
    })
  }

  let memberNames = props.groupMembers.map(member => {
    return member.first_name
  })

  const data = {

    labels: memberNames,
    datasets: [
      {data: chores,
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
    <div>
      <Pie data={data} options={options} />
    </div>
  )
}

export default ChoresChart;
