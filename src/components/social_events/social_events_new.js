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

class AddSocialEventForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    open: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleSubmit(){
    const newSocialEvent = {
      name: this.refs.name.value,
      category: "social"
    }
    this.refs.name.getRenderedComponent().props.input.onChange("");

    this.props.actions.addEvent(newSocialEvent)
  }

  handleChange(event){
    this.refs.name.getRenderedComponent().props.input.onChange(event.target.value);
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
          <Field withRef={true} ref="name" component={TextField} hintText="What is your social event?" onChange={this.handleChange} value={this.state.name}/>
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
