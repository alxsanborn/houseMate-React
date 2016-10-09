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

class AddBillForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    open: false,
    date: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  };

  handleDate(event, date){
    this.setState({date: date})
  }
  handleSubmit(){
    const newBill = {
      name: this.refs.name.value,
      end_time: this.state.date,
      category: "bill",
    }

    this.refs.name.getRenderedComponent().props.input.onChange("");
    this.handleClose()
    this.props.actions.addEvent(newBill)
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
          <Field withRef={true} ref="name" name="name" component={TextField} hintText="What bill needs to be paid?" />
         <Field withRef={true} ref="date" name="date" component={DatePicker} onChange={this.handleDate} hintText="When is it due?" />
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
