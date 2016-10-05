import React from 'react'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

const style = {
  height: 620,
  width: 560,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
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
     <div className='social-events'>
     <Paper style={style} zDepth={3} >
      <AppBar title="Message Board" style={{backgroundColor: '#68B6C2'}}/>
     </Paper>
     </div>
   )
 }
 }

 module.exports = Messages
