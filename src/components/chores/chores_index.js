import React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox'
import ChoreNew from './chores_new'
import AppBar from 'material-ui/AppBar';

const style = {
  width: 800,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
};


 class ChoresIndex extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
      chores: []
     }
   }

 render(){
   return (
    <div className='chores'>
       <Paper style={style} zDepth={3} >
       <AppBar title="Upcoming Chores" style={{backgroundColor: '#68B6C2'}}/>
        <ul>
           {this.props.chores.map((chore, index) =>
             <Checkbox label={chore.name}/>)}
        </ul>
        <ul><ChoreNew /></ul>
       </Paper>
    </div>
   )
 }
 }

 function mapStateToProps(state){
   return {
     chores: state.events.filter(function(event){
       return event.category === "chore"
     })
   }
 }

const componentCreator = connect(mapStateToProps)
export default componentCreator(ChoresIndex)
