import React from 'react'
import * as actions from '../../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'

class BillNew extends React.Component {
  constructor(props){
    super(props)
     this.newBillHandler = this.newBillHandler.bind(this)
  }

   newBillHandler(event){
     event.preventDefault()
     debugger
     const newBill = {
       name: this.refs.name.value,
       category: "bill",
     }

     this.props.actions.addEvent(newBill)
   }


render(){
  return (

    <form onSubmit={this.newBillHandler}>
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
export default componentCreator(BillNew);
