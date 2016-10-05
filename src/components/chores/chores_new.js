import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Add from 'material-ui/svg-icons/content/add'
import ChoresForm from './chores_form'

export default class AddChoreDialog extends React.Component {
  constructor(){
    super();

    this.state = {
    open: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit() {
    debugger;
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
          open={this.state.open}
        >
          <ChoresForm/>
        </Dialog>
      </div>
    );
  }
}
