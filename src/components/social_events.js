import React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox'
import AppBar from 'material-ui/AppBar';
import {amber300
} from 'material-ui/styles/colors';

const style = {
  height: 400,
  width: 800,
  margin: 10,
  textAlign: 'left',
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
        <AppBar title="Upcoming Social Events" style={{backgroundColor: amber300
}}/>
       <ul>
          {this.props.social_events.map((event, index) =>
            <Checkbox label={event.name}/>)}
       </ul>
     </Paper>
     </div>
   )
 }
 }

 function mapStateToProps(state){
   return {
     social_events: state.events.filter(function(event){
       return event.category === "social"
     })
   }
 }

 const componentCreator = connect(mapStateToProps)
 export default componentCreator(SocialEvents)
