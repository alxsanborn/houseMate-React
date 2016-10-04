import React from 'react'
import Paper from 'material-ui/Paper';

const style = {
  height: 800,
  width: 400,
  margin: 10,
  textAlign: 'center',
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
       {"Messages"}
     </Paper>
     </div>
   )
 }
 }

 module.exports = Messages
