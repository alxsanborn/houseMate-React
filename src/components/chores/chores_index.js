import React from 'react'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Checkbox from 'material-ui/Checkbox'
import AddChoreForm from './chores_new'

const style = {
  width: 800,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
};

const ChoresIndex = (props) => {
   return (
    <div className='chores'>
       <Paper style={style} zDepth={3} >
       <AppBar title="Upcoming Chores" style={{backgroundColor: '#68B6C2'}}
       iconElementRight={<AddChoreForm/>}/>
        <ul>
           {props.chores.map((chore, index) =>
             <Checkbox label={chore.name}/>)}
        </ul>
       </Paper>
    </div>
   )
 }

 export default ChoresIndex
