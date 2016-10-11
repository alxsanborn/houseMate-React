import { reduxForm, Field } from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import React from 'react';

import * as actions from '../../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Add from 'material-ui/svg-icons/content/add'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker';

class AddBillForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    name: '',
    amount: 0,
    open: false,
    time: null,
    }

    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleClose = this.handleClose.bind(this)
  };

  handleName(event) {
  this.setState({
      name: event.target.value
    });
  }

  handleAmount(event){
    this.setState({amount: event.target.value})
  }
  handleDate(event, date){
    this.setState({date: date})
  }

  handleSubmit(event){
    const newBill = {
      name: this.state.name,
      amount: this.state.amount,
      end_time: this.state.date,
      category: "bill",
    }
    //debugger
    this.props.actions.addEvent(newBill)
    this.handleClose()
    this.refs.name.getRenderedComponent().props.input.onChange("");
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        type='submit'
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
      <IconButton tooltip="Add Bill" onTouchTap={this.handleOpen}>
        <Add color={"#FFF"}/>
      </IconButton>
      <Dialog
        title="Add a Bill"
        actions={actions}
        modal={true}
        open={this.state.open}>
        <form>
          <TextField hintText="What bill needs to be paid?" onChange={this.handleName}/>
          <TextField hintText="How much?" onChange={this.handleAnount}/>
          <DatePicker onChange={this.handleDate} hintText="What day is it due?" />
        </form>
      </Dialog>
      </div>
    )
  }
}

AddBillForm = reduxForm({
  form: 'AddBillForm'
})(AddBillForm)

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(AddBillForm);
