import React from 'react';
// import NavBar from './nav_bar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import SocialEventsIndex from './social_events/social_events_index'
import ChoresIndex from './chores/chores_index'
import Messages from './messages/messages_index'
import BillsIndex from './bills/bills_index'

import { View } from 'react-native';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';


export default (props) => {
   return (
      <MuiThemeProvider>
       <div>
         <AppBar
          title="houseMate"
          url='/'
          style={{
            fontFamily: 'Pacifico',
            backgroundColor: '#e3704d'
          }}
          iconElementLeft={<IconButton><ActionHome /></IconButton>}/>
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
            <SocialEventsIndex />
            <ChoresIndex />
            <BillsIndex />
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
