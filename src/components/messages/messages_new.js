import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Add from 'material-ui/svg-icons/content/add'
import Paper from 'material-ui/Paper'

const noteStyle = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class AddMessageForm extends React.Component {
  constructor(props){
    super(props);

    this.submitMessage = this.submitMessage.bind(this);
  }

  submitMessage(){
    //add code here
  }

  render(){
    return (
      <div>
        <IconButton tooltip="Add Message" onTouchTap={this.submitMessage}>
          <Add color={"#FFF"}/>
        </IconButton>
      </div>
    )
  }
}

export default AddMessageForm;
