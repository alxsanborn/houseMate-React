import React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox'
import AddChoreForm from './chores_new'
import AppBar from 'material-ui/AppBar';
import * as actions from '../../actions/index'
import {bindActionCreators} from 'redux'
import RaisedButton from 'material-ui/RaisedButton'
import { reduxForm, Field } from 'redux-form'

const style = {
  width: 800,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
};

const choreCheckbox = ({ input, label }) => (
  <Checkbox label={label.name}
    checked={label.status === 'complete'}
    onCheck={(e, checked) => label.selectChore(checked)}
    />
)

class ChoresIndex extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
      chores: []
     }
     this.deleteChore = this.deleteChore.bind(this)
     this.selectChore = this.selectChore.bind(this)
   }

  selectChore(event){
  //debugger
  // const completeChore = {
  //   id: event.target.id,
  //   name: this.refs.chore.props.label,
  //   category: 'chore',
  //   status: "complete"
  //   }
  debugger
  this.props.actions.editEvent(event.target.id)
  }

  deleteChore(event){
    debugger
    this.props.actions.deleteEvent(event.target.id)
  }

 render(){
   return (
    <div className='chores'>
       <Paper style={style} zDepth={3} >
       <AppBar title="Upcoming Chores" style={{backgroundColor: '#68B6C2'}}
       iconElementRight={<AddChoreForm/>}/>

        {this.props.chores.map((chore) =>
          <div>
               <Checkbox
               label={chore.name}
               id={chore.id}
               checked={chore.status === 'complete'}
               onCheck={this.selectChore}/>
                <RaisedButton tooltip="Remove Chore" name={chore.id} label="Delete" onTouchTap={this.deleteChore} />
            </div>
            )}

       </Paper>
    </div>
   )
 }
 }
        // <Field name="chore" component={choreCheckbox} label={chore} onChange={this.selectChore} />
 // ChoresIndex = reduxForm({
 //   form: 'EditChoreForm'
 // })(ChoresIndex)

 // </div>

 function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
 }


const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(ChoresIndex);
