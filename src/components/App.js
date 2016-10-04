import React from 'react';
// import NavBar from './nav_bar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SocialEvents from './social_events'
import Chores from './chores/chores_index'
import Messages from './messages'
import { View } from 'react-native';


export default (props) => {
   return (
      <MuiThemeProvider>
       <div>
         <AppBar
          title="houseMate"
          url='/'
          style={{
            fontFamily: 'Pacifico'
          }}/>
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
            <SocialEvents />
            <Chores />
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
