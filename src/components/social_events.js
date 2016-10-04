import React from 'react'
import Paper from 'material-ui/Paper';

const style = {
  height: 400,
  width: 800,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

 class SocialEvents extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
      events: []
     }
   }


 render(){
   return (
     <div className='social-events'>
     <Paper style={style} zDepth={3} >
       {"Social Events!"}
     </Paper>
     </div>
   )
 }
 }

 module.exports = SocialEvents
