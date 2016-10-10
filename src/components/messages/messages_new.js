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

class AddMessageForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    open: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
  };

  handleSubmit(){
    const newMessage = {
      content: this.refs.content.value,
    }
    this.refs.content.getRenderedComponent().props.input.onChange("");

    this.props.actions.addMessage(newMessage)
    this.handleClose();
  }

  handleInputChange(event){
    this.refs.content.getRenderedComponent().props.input.onChange(event.target.value);
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
      <IconButton tooltip="Add Message" onTouchTap={this.handleOpen}>
        <Add color={"#FFF"}/>
      </IconButton>
      <Dialog
        title="Add a Message"
        actions={actions}
        modal={true}
        open={this.state.open}>
        <form>
          <Field withRef={true} ref="content" component={TextField} hintText="Message" onChange={this.handleInputChange} value={this.state.name}/>
        </form>
      </Dialog>
      </div>
    )
  }
}

AddMessageForm = reduxForm({
  form: 'AddMessageForm'
})(AddMessageForm)

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(AddMessageForm);
