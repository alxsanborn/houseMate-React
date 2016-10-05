import React from 'react'
import * as actions from '../../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'

class SocialEventNew extends React.Component {
  constructor(props){
    super(props)
     this.newSocialEventHandler = this.newSocialEventHandler.bind(this)
  }

   newSocialEventHandler(event){
     event.preventDefault()
     const newSocialEvent = {
       name: this.refs.name.value,
       category: "socialize",
     }

     this.props.actions.addEvent(newSocialEvent)
   }


render(){
  return (
    <form onSubmit={this.newSocialEventHandler}>
      <input ref='name'/>
      <input type="submit" />
    </form>
  )
}
}
function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(SocialEventNew);
