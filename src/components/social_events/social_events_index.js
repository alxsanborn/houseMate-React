
import React from 'react'
import Paper from 'material-ui/Paper';
// import Checkbox from 'material-ui/Checkbox'
import AppBar from 'material-ui/AppBar';
import AddSocialEventForm from './social_events_new'
import Moment from 'moment';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

const tabStyle = {
  backgroundColor: '#b3dae0',
  color: 'black',
}


class SocialEvents extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      socialEvents: [],
      slideIndex: 0
    }
    this.sortToday = this.sortToday.bind(this)
    this.sortTomorrow = this.sortTomorrow.bind(this)
    this.sort2Days = this.sort2Days.bind(this)
    this.sort3Days = this.sort3Days.bind(this)
    this.sort4Days = this.sort4Days.bind(this)
    this.sort5Days = this.sort5Days.bind(this)
    this.sort6Days = this.sort6Days.bind(this)
    this.sort7Days = this.sort7Days.bind(this)
    this.sort8Days = this.sort8Days.bind(this)
    this.sort9Days = this.sort9Days.bind(this)
    this.sort10Days = this.sort10Days.bind(this)
    this.sort11Days = this.sort11Days.bind(this)
    this.sort12Days = this.sort12Days.bind(this)
    this.sort13Days = this.sort13Days.bind(this)
    this.sort14Days = this.sort14Days.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


    sortToday(){
    let current = Moment()
    let thisWeek = this.props.social_events.filter(social => social.day == current.date())
    let sortedSocialEvents = []
    if (thisWeek) {
      sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
    }
    if (sortedSocialEvents.length > 0) {
      return sortedSocialEvents
    }
    else {
      return "No social events today."
    }
  }

  sortTomorrow(){
  let current = Moment().add(1, 'days')
  let thisWeek = this.props.social_events.filter(social => social.day == current.date())
  let sortedSocialEvents = []
  if (thisWeek) {
    sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
  }
  if (sortedSocialEvents.length > 0) {
    return sortedSocialEvents
  }
  else {
    return "No social events today."
  }
}

sort2Days(){
let current = Moment().add(2, 'days')
let thisWeek = this.props.social_events.filter(social => social.day == current.date())
let sortedSocialEvents = []
if (thisWeek) {
  sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
}
if (sortedSocialEvents.length > 0) {
  return sortedSocialEvents
}
else {
  return "No social events today."
}
}

sort3Days(){
let current = Moment().add(3, 'days')
let thisWeek = this.props.social_events.filter(social => social.day == current.date())
let sortedSocialEvents = []
if (thisWeek) {
  sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
}
if (sortedSocialEvents.length > 0) {
  return sortedSocialEvents
}
else {
  return "No social events today."
}
}

sort4Days(){
let current = Moment().add(4, 'days')
let thisWeek = this.props.social_events.filter(social => social.day == current.date())
let sortedSocialEvents = []
if (thisWeek) {
  sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
}
if (sortedSocialEvents.length > 0) {
  return sortedSocialEvents
}
else {
  return "No social events today."
}
}

sort5Days(){
let current = Moment().add(5, 'days')
let thisWeek = this.props.social_events.filter(social => social.day == current.date())
let sortedSocialEvents = []
if (thisWeek) {
  sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
}
if (sortedSocialEvents.length > 0) {
  return sortedSocialEvents
}
else {
  return "No social events today."
}
}

sort6Days(){
let current = Moment().add(6, 'days')
let thisWeek = this.props.social_events.filter(social => social.day == current.date())
let sortedSocialEvents = []
if (thisWeek) {
  sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
}
if (sortedSocialEvents.length > 0) {
  return sortedSocialEvents
}
else {
  return "No social events today."
}
}

sort7Days(){
let current = Moment().add(7, 'days')
let thisWeek = this.props.social_events.filter(social => social.day == current.date())
let sortedSocialEvents = []
if (thisWeek.length) {
  sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
}
if (sortedSocialEvents.length > 0) {
  return sortedSocialEvents
}
else {
  return "No social events today."
}
}

sort8Days(){
let current = Moment().add(8, 'days')
let thisWeek = this.props.social_events.filter(social => social.day == current.date())
let sortedSocialEvents = []
if (thisWeek.length) {
  sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
}
if (sortedSocialEvents.length > 0) {
  return sortedSocialEvents
}
else {
  return "No social events today."
}
}

sort9Days(){
let current = Moment().add(9, 'days')
let thisWeek = this.props.social_events.filter(social => social.day == current.date())
let sortedSocialEvents = []
if (thisWeek.length) {
  sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
}
if (sortedSocialEvents.length > 0) {
  return sortedSocialEvents
}
else {
  return "No social events today."
}
}

sort10Days(){
let current = Moment().add(10, 'days')
let thisWeek = this.props.social_events.filter(social => social.day == current.date())
let sortedSocialEvents = []
if (thisWeek.length) {
  sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
}
if (sortedSocialEvents.length > 0) {
  return sortedSocialEvents
}
else {
  return "No social events today."
}
}

sort11Days(){
let current = Moment().add(11, 'days')
let thisWeek = this.props.social_events.filter(social => social.day == current.date())
let sortedSocialEvents = []
if (thisWeek.length) {
  sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
}
if (sortedSocialEvents.length > 0) {
  return sortedSocialEvents
}
else {
  return "No social events today."
}
}

sort12Days(){
let current = Moment().add(12, 'days')
let thisWeek = this.props.social_events.filter(social => social.day == current.date())
let sortedSocialEvents = []
if (thisWeek.length) {
  sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
}
if (sortedSocialEvents.length > 0) {
  return sortedSocialEvents
}
else {
  return "No social events today."
}
}

sort13Days(){
let current = Moment().add(13, 'days')
let thisWeek = this.props.social_events.filter(social => social.day == current.date())
let sortedSocialEvents = []
if (thisWeek.length) {
  sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
}
if (sortedSocialEvents.length > 0) {
  return sortedSocialEvents
}
else {
  return "No social events today."
}
}

sort14Days(){
let current = Moment().add(14, 'days')
let thisWeek = this.props.social_events.filter(social => social.day == current.date())
let sortedSocialEvents = []
if (thisWeek.length) {
  sortedSocialEvents = thisWeek.map((event, index) =>  <li>{event.name} | {Moment(event.end_time).format('h:mm a')}</li> )
}
if (sortedSocialEvents.length > 0) {
  return sortedSocialEvents
}
else {
  return "No social events today."
}
}
  handleChange(value) {
  if (Number.isInteger(value)){
    this.setState({
      slideIndex: event.target.value,
    });
  }
};
  render() {
    return (
      <div className='social-events'>
        <Paper zDepth={3}>

          <AppBar
            title="Upcoming Social Events"
            style={ { backgroundColor: '#68B6C2' } }
            iconElementRight={ <AddSocialEventForm/> }
          />
          <Tabs
                     onChange={this.handleChange}
                     value={this.state.slideIndex}
                     tabItemContainerStyle={{backgroundColor:'#b3dae0', color: 'black'}}
                     inkBarStyle={{backgroundColor:"#FFC107"}}
                   >
                   <Tab label="This Week" value={0}>
                     <div>
                       <ul>
                        Today: <ul> {this.sortToday()} </ul>
                        Tomorrow: <ul> {this.sortTomorrow()} </ul>
                        {Moment().add(2, 'days').format('dddd MMMM Do')}: <ul> {this.sort2Days()} </ul>
                        {Moment().add(3, 'days').format('dddd MMMM Do')}:<ul> {this.sort3Days()} </ul>
                        {Moment().add(4, 'days').format('dddd MMMM Do')}: <ul> {this.sort4Days()} </ul>
                        {Moment().add(5, 'days').format('dddd MMMM Do')}: <ul> {this.sort5Days()} </ul>
                        {Moment().add(6, 'days').format('dddd MMMM Do')}: <ul> {this.sort6Days()} </ul>
                        {Moment().add(7, 'days').format('dddd MMMM Do')}: <ul> {this.sort7Days()} </ul>
                       </ul>
                     </div>
                   </Tab>
                   <Tab label="Next Week" value={1}>
                     <div>
                       <ul>
                        {Moment().add(7, 'days').format('dddd MMMM Do')}: <ul> {this.sort7Days()} </ul>
                        {Moment().add(8, 'days').format('dddd MMMM Do')}: <ul> {this.sort8Days()} </ul>
                        {Moment().add(9, 'days').format('dddd MMMM Do')}: <ul> {this.sort9Days()} </ul>
                        {Moment().add(10, 'days').format('dddd MMMM Do')}: <ul> {this.sort10Days()} </ul>
                        {Moment().add(11, 'days').format('dddd MMMM Do')}: <ul> {this.sort11Days()} </ul>
                        {Moment().add(12, 'days').format('dddd MMMM Do')}: <ul> {this.sort12Days()} </ul>
                        {Moment().add(13, 'days').format('dddd MMMM Do')}: <ul> {this.sort13Days()} </ul>
                        {Moment().add(14, 'days').format('dddd MMMM Do')}: <ul> {this.sort14Days()} </ul>
                       </ul>
                     </div>
                   </Tab>
                  </Tabs>
        </Paper>
      </div>
    )
  }
}




export default SocialEvents;
