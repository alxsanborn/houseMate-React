import React from 'react'
import Paper from 'material-ui/Paper';

const style = {
  height: 400,
  width: 800,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

 class Chores extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
      events: []
     }
   }


 render(){
   return (
     <div className='chores'>
     <Paper style={style} zDepth={3} >
       {"Chores!"}
     </Paper>
     </div>
   )
 }
 }

 module.exports = Chores
