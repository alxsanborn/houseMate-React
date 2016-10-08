import React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox'
import AppBar from 'material-ui/AppBar';
import AddSocialEventForm from './social_events_new'
import Moment from 'moment';

const style = {
  width: 800,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
};

 class SocialEventsIndex extends React.Component {
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
        <AppBar title="Upcoming Social Events" style={{backgroundColor: '#68B6C2'
}} iconElementRight={<AddSocialEventForm/>}/>
       <ul>
          {this.props.social_events.map((event, index) =>
            <Checkbox label={`${event.name} | ${Moment(event.start_time).format('dddd')}`}/>)}
       </ul>
         <ul><AddSocialEventForm/></ul>
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
 export default componentCreator(SocialEventsIndex)
