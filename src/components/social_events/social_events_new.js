
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

class AddSocialEventForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    name: '',
    open: false,
    date: null,
    time: null,
    }

    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleClose = this.handleClose.bind(this)
  };

  handleName(event) {
  this.setState({
      name: event.target.value
    });
  }

  handleTime(event, time){
    this.setState({time: time})
  }
  handleDate(event, date){
    this.setState({date: date})
  }

  handleSubmit(event){
    const newSocialEvent = {
      name: this.state.name,
      start_time: this.state.date,
      category: "social",
    }
    this.props.actions.addEvent(newSocialEvent)
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
      <IconButton tooltip="Add Social Event" onTouchTap={this.handleOpen}>
        <Add color={"#FFF"}/>
      </IconButton>
      <Dialog
        title="Add a Social Event"
        actions={actions}
        modal={true}
        open={this.state.open}>
        <form>
          <TextField hintText="What is your social event called?" onChange={this.handleName}/>
          <DatePicker onChange={this.handleDate} hintText="What day is it?" />
          <TimePicker onChange={this.handleTime} hintText="What time is it?" />
        </form>
      </Dialog>
      </div>
    )
  }
}

AddSocialEventForm = reduxForm({
  form: 'AddSocialEventForm'
})(AddSocialEventForm)

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(AddSocialEventForm);
