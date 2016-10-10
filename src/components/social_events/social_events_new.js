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
    open: false,
    date: null,
    time: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleTime = this.handleTime.bind(this);
  };

  handleTime(event, time){
    this.setState({time: time})
  }
  handleDate(event, date){
    this.setState({date: date})
  }
  handleSubmit(){
    const newSocialEvent = {
      name: this.refs.name.value,
      end_time: this.state.date,
      category: "social",
    }

    this.refs.name.getRenderedComponent().props.input.onChange("");
    this.handleClose()
    this.props.actions.addEvent(newSocialEvent)
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
          <Field withRef={true} ref="name" name="name" component={TextField} hintText="What is your social event?" />
         <Field withRef={true} ref="date" name="date" component={DatePicker} onChange={this.handleDate} hintText="What day is it?" />
          <Field withRef={true} ref="time" name="time" component={TimePicker} onChange={this.handleDate} hintText="What time is it?" />
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
