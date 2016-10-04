import React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';

const style = {
  height: 400,
  width: 800,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

 class ChoresIndex extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
      chores: []
     }
   }


 render(){
   return (
     <div className='chores'>
     <Paper style={style} zDepth={3} >
       <ul>
         {this.props.chores.map(chore => chore.name)}
         </ul>

     </Paper>
     </div>
   )
 }
 }

 function mapStateToProps(state){
   return {
     chores: state.chores
   }
 }

const componentCreator = connect(mapStateToProps)
export default componentCreator(ChoresIndex)
