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
import ChoresChart from './chores_chart.js'
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

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
      chores: [],
      slideIndex: 0
     }
     this.deleteChore = this.deleteChore.bind(this)
     this.selectChore = this.selectChore.bind(this)
   }

  selectChore(event){
  // const completeChore = {
  //   id: event.target.id,
  //   name: this.refs.chore.props.label,
  //   category: 'chore',
  //   status: "complete"
  //   }
  this.props.actions.editEvent(event.target.id)
  }

  deleteChore(event){
    this.props.actions.deleteEvent(event.target.id)
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

 render(){
   return (
    <div className='chores'>
       <Paper style={style} zDepth={3} >
       <AppBar title="Chores" style={{backgroundColor: '#68B6C2'}}
       iconElementRight={<AddChoreForm/>}/>
       <div>
         <Tabs
          style={{backgroundColor: 'white', color: 'black'}}
           onChange={this.handleChange}
           value={this.state.slideIndex}
         >
           <Tab label="Your Upcoming Chores" value={0} />
           <Tab label="Household Chores" value={1} />
           <Tab label="Chore Distribution" value={2} />
         </Tabs>
         <SwipeableViews
           index={this.state.slideIndex}
           onChangeIndex={this.handleChange}
         >
           <div>
           <ul>
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
            </ul>
           </div>
           <div style={styles.slide}>
             All chores here
           </div>
           <div style={styles.slide}>
             <ChoresChart/>
           </div>
         </SwipeableViews>
       </div>
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
