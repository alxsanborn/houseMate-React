import React from 'react'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import AddMessageForm from './messages_new';
import { yellow300 } from 'material-ui/styles/colors';

const style = {
  height: 620,
  width: 560,
  textAlign: 'left',
  display: 'inline-block',
};

const noteStyle1 = {
  height: 200,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: yellow300,
  fontFamily: 'Permanent Marker',
  fontSize: '20px',
  transform: 'rotate(-10deg)'
};

const noteStyle2 = {
  height: 200,
  width: 200,
  margin: 40,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: yellow300,
  fontFamily: 'Permanent Marker',
  fontSize: '20px',
  transform: 'rotate(15deg)'
};

const noteStyle3 = {
  height: 200,
  width: 200,
  marginLeft: 150,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: yellow300,
  fontFamily: 'Permanent Marker',
  fontSize: '20px',
  transform: 'rotate(5deg)',
  align: 'middle'
};


class Messages extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: []
    }

    this.renderPostIts = this.renderPostIts.bind(this)
  }

  //this can be refactored by adding the notestyle to the css files and applying an id to each postit
  renderPostIts() {
    return this.props.messages.map((message, index) => {
      if (index === 0) {
        return (
          <Paper style={ noteStyle1 } zDepth={ 1 }>
            { message.content }
          </Paper>)
      } else if (index === 1) {
        return (
          <Paper style={ noteStyle2 } zDepth={ 1 }>
            { message.content }
          </Paper>)
      } else if (index === 2) {
        return (
          <Paper style={ noteStyle3 } zDepth={ 1 }>
            { message.content }
          </Paper>)
      }
    }
    )
  }

  render() {
    return (
      <div className='messages'>
        <Paper style={ style } zDepth={ 3 }>
          <AppBar title="Message Board" style={ { backgroundColor: '#68B6C2' } } iconElementRight={ <AddMessageForm/> } />
          { this.renderPostIts() }
        </Paper>
      </div>
    )
  }
}


module.exports = Messages
