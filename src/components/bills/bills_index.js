import React from 'react'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar'
import Checkbox from 'material-ui/Checkbox'
import BillNew from './bills_new'

const style = {
  width: 800,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
};

const BillsIndex = (props) => {
  return (
    <div className='bills'>
      <Paper
       style={style}
       zDepth={3} >
         <AppBar
           title="Upcoming Bills"
           style={{backgroundColor: '#68B6C2'}}/>
        <ul>
           {props.bills.map((event, index) =>
             <Checkbox label={event.name}/>)}
        </ul>
        <ul><BillNew /></ul>
      </Paper>
    </div>
  )
}

export default BillsIndex;
