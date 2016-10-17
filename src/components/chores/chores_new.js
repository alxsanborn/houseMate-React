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
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



class AddChoreForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    name: '',
    open: false,
    date: null,
    time: null,
    assigned_to: '',
    value: 1
    }

    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleClose = this.handleClose.bind(this)
    this.handleAssignment =this.handleAssignment.bind(this)
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
    const newChore = {
      name: this.state.name,
      end_time: this.state.date,
      category: "chore",
      assigned_to: this.state.assigned_to
    }

    this.props.actions.addEvent(newChore)
    this.handleClose()
    this.refs.name.getRenderedComponent().props.input.onChange("");
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleAssignment = (event, index, value) => {
    this.setState({assigned_to: value, value: value});
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
      <IconButton tooltip="Add Chore" onTouchTap={this.handleOpen}>
        <Add color={"#FFF"}/>
      </IconButton>
      <Dialog
        title="Add a Chore"
        actions={actions}
        modal={true}
        open={this.state.open}>
        <form>

          <TextField hintText="What chore needs to be completed?" onChange={this.handleName}/><br/>

          <SelectField
            value={this.state.assigned_to}
            onChange={this.handleAssignment}
            floatingLabelText={"Assign to: "}>
            {this.props.groupMembers.map(function(member) {
              return <MenuItem value={member.id} primaryText={ member.first_name }/>
            })}
          </SelectField><br/>

          <DatePicker onChange={this.handleDate} hintText="Date to be completed by" />
          <TimePicker onChange={this.handleTime} hintText="Time to be completed by" />





        </form>
      </Dialog>
      </div>
    )
  }
}

AddChoreForm = reduxForm({
  form: 'AddChoreForm'
})(AddChoreForm)

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(AddChoreForm);
