import * as actions from '../../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ChoresForm from './chores_form'
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';



class ChoreNew extends React.Component {
  constructor(props){
    super(props)
     this.newChoreHandler = this.newChoreHandler.bind(this)
  }

   newChoreHandler(event){
     event.preventDefault()
     debugger
    //  const newChore = {
    //    name: this.refs.choreform.value,
    //    category: "chore",
    //  }

    // this.props.actions.addEvent(newChore)
   }

render(){
  return (
    <div>
    <ChoresForm onSubmit={this.newChoreHandler} />
    </div>
  )
}
}



function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(ChoreNew);
