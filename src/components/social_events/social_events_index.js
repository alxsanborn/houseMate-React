
import React from 'react'
import Paper from 'material-ui/Paper';
// import Checkbox from 'material-ui/Checkbox'
import AppBar from 'material-ui/AppBar';
import AddSocialEventForm from './social_events_new'
import Moment from 'moment';


class SocialEvents extends React.Component {
  render() {
    return (
      <div className='social-events'>
        <Paper zDepth={3}>

          <AppBar
            title="Upcoming Social Events"
            style={ { backgroundColor: '#68B6C2' } }
            iconElementRight={ <AddSocialEventForm/> }
          />

          <ul>
            {this.props.social_events.map((event, index) =>  <li>{event.name} | {Moment(event.start_time).format('dddd')}</li> )}
          </ul>

          <ul>
            <AddSocialEventForm/>
          </ul>

        </Paper>
      </div>
    )
  }
}


export default SocialEvents;
