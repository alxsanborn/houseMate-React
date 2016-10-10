import React from 'react'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import AddMessageForm from './messages_new';
import {yellow300} from 'material-ui/styles/colors';

const style = {
  height: 620,
  width: 560,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
};

const noteStyle = {
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
   }


 render(){
   return (
     <div className='messages'>
     <Paper style={style} zDepth={3} >
      <AppBar title="Message Board" style={{backgroundColor: '#68B6C2'}}
      iconElementRight={<AddMessageForm/>}/>

      <Paper style={noteStyle} zDepth={1}>
        {`I fed the cat!
          -- Alice`}
      </Paper>
      <Paper style={noteStyle2} zDepth={1}>
        {`Trash Pick-Up is Tuesdays, Thursdays and Sundays`}
      </Paper>
      <Paper style={noteStyle3} zDepth={1}>
        {`leftover lasagna up for grabs in the fridge!`}
      </Paper>
     </Paper>
     </div>
   )
 }
 }

 module.exports = Messages
