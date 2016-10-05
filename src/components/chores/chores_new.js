import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Add from 'material-ui/svg-icons/content/add'

export default class AddChoreDialog extends React.Component {
  state = {
    open: false,
  };

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
        disabled={true}
        onTouchTap={this.handleClose}
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
          {"Form will be here"}
        </Dialog>
      </div>
    );
  }
}