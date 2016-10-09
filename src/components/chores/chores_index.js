import React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox'
import AddChoreForm from './chores_new'
import AppBar from 'material-ui/AppBar';
import * as actions from '../../actions/index'
import {bindActionCreators} from 'redux'
import RaisedButton from 'material-ui/RaisedButton'

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
     this.deleteChore = this.deleteChore.bind(this)

   }

  deleteChore(event){
    this.props.actions.deleteEvent(event.target.id)
    debugger;
  }

 render(){
   return (
    <div className='chores'>
       <Paper style={style} zDepth={3} >
       <AppBar title="Upcoming Chores" style={{backgroundColor: '#68B6C2'}}
       iconElementRight={<AddChoreForm/>}/>
        <ul>
           {this.props.chores.map((chore) =>
             <div>
             <Checkbox label={chore.name}  />
            </div>
          )}
        </ul>
        <RaisedButton tooltip="Remove Chore" label="Delete" onTouchTap={this.deleteChore} />
       </Paper>
    </div>
   )
 }
 }

 function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
 }


const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(ChoresIndex);
