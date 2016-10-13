import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox'
import AddChoreForm from './chores_new'
import AppBar from 'material-ui/AppBar';
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'
import RaisedButton from 'material-ui/RaisedButton'

import ChoresChart from './chores_chart.js'
import {Tabs, Tab} from 'material-ui/Tabs';


const tabStyle = {
  backgroundColor: '#b3dae0',
  color: 'black',
}

let currentUserId = Number(sessionStorage.currentUser)

class ChoresIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chores: [],
      isClicking: false,
      slideIndex: 0
    }
    this.deleteChore = this.deleteChore.bind(this)
    this.selectChore = this.selectChore.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.currentUser = this.currentUser.bind(this)
    this.currentUserChores = this.currentUserChores.bind(this)
    this.assignCurrentUserChores = this.assignCurrentUserChores.bind(this)
  }

  currentUser(){
    let currentUser = this.props.groupMembers.find((member) => { return member.id === currentUserId})
    if (currentUser){
      return currentUser
    }
    else {
      return null
    }
  }

  currentUserChores(){
    let currentUser =
    this.props.groupMembers.find((member) => { return member.id === currentUserId})
    if (currentUser){
      return currentUser.assigned_chores
      // this.props.chores.filter((chore)=>{
      //   return choreIds.map((id)=>{
      //     return id === chore.id
      //   })
      // })
    }
  }

  assignCurrentUserChores(){
    let currentUserChores = []
    if (this.currentUserChores()) {
      currentUserChores = this.currentUserChores()
    }
    return currentUserChores
  }

  handleStatus(status) {
    if (status === 'pending') {
      return 'complete'
    } else {
      return 'pending'
    }
  }

  selectChore(event) {
    const completeChore = {
      id: this.assignCurrentUserChores()[event.target.id].id,
      name: this.assignCurrentUserChores()[event.target.id].name,
      category: 'chore',
      status: this.handleStatus(this.assignCurrentUserChores()[event.target.id].status)
    }

    this.setState({isClicking: !this.state.isClicking})

    this.props.actions.editEvent(completeChore)
  }

  deleteChore(event) {
    let choresToDelete = []
    choresToDelete = this.assignCurrentUserChores().filter(chore => {
      return chore.status === 'complete'
    })
    choresToDelete.forEach((chore) => this.props.actions.deleteEvent(chore.id))

  }

  handleChange(value) {
    if (Number.isInteger(value)){
      this.setState({
        slideIndex: event.target.value,
      });
    }
  };

  render() {
    return (
      <div className='chores'>
        <Paper zDepth={ 3 }>

          <AppBar
          title="Chores"
          style={ { backgroundColor: '#68B6C2' } }
          iconElementRight={ <AddChoreForm/> }
          />

          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
            tabItemContainerStyle={{backgroundColor:'#b3dae0', color: 'black'}}
            inkBarStyle={{backgroundColor:"#FFC107"}}
         >


        //  FIX THIS --- YOU CAN'T CLICK THE CHECKBOX, I THINK IT'S AN ISSUE WITH THE ID? ASK ALEX
            <Tab label="Your Upcoming Chores" value={0}>
              <div>
                <ul>
                  { this.assignCurrentUserChores().map((chore, index) =>
                    <div>
                      <Checkbox
                      label={ chore.name }
                      id={ index }
                      checked={ chore.status === 'complete' }
                      onClick={ this.selectChore } />
                    </div>
                  )}
                </ul>

                <RaisedButton label="Remove completed chores" onTouchTap={ this.deleteChore } />
              </div>
            </Tab>

            <Tab label="Household Chores" value={1}>
              <ul>
              {this.props.chores.map(chore => {
                return <li>{chore.name} <i>(assigned to {chore.assigned_to})</i></li>
              })}
              </ul>
            </Tab>
            <Tab label="Chore Distribution" value={2}>
            <ChoresChart    chores={this.props.chores} groupMembers={this.props.groupMembers} />
            </Tab>
         </Tabs>
        </Paper>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(ChoresIndex);
