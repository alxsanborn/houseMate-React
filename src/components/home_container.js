import React from 'react';
import {connect} from 'react-redux'

import * as actions from '../actions/index'
import {bindActionCreators} from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';

import SocialEvents from './social_events/social_events_index'
import ChoresIndex from './chores/chores_index'
import Messages from './messages/messages_index'
import BillsIndex from './bills/bills_index'

import { View } from 'react-native';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import SignIn from './sign_in';

class HomeContainer extends React.Component {
  componentWillMount() {
    if (this.props.socialEvents.length <= 0) {
      this.props.actions.fetchEvents();
    }
  }

  render(){
    return (
     <MuiThemeProvider>
      <div>
       <View style={{
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'space-between',
       }}>

         <View style={{
           flex: 1,
           flexDirection: 'column',
           justifyContent: 'space-between',
         }}>
           <SocialEvents social_events={this.props.socialEvents}/>
           <ChoresIndex chores={this.props.chores}/>
           <BillsIndex bills={this.props.bills}/>
         </View>

         <View style={{
           flex: 1,
           flexDirection: 'column',
           justifyContent: 'space-between',
         }}>
           <Messages />
         </View>
       </View>
      </div>
     </MuiThemeProvider>
   )
  }
 }

 function mapStateToProps(state) {
   debugger;
   let socialEvents = []
   let chores = []
   let bills = []
   if (state.events.length > 0) {
     socialEvents = state.events.filter(event => {
       return event.category === "social"
     })

     chores = state.events.filter(event => {
       return event.category === "chore"
     })

     bills = state.events.filter(event => {
       return event.category === "bill"
     })
   }
   return {socialEvents: socialEvents, chores: chores, bills: bills}
 }

 function mapDispatchToProps(dispatch){
   return {
     actions: bindActionCreators(actions, dispatch)
   }
 }

 const componentCreator = connect(mapStateToProps, mapDispatchToProps)
 export default componentCreator(HomeContainer)
