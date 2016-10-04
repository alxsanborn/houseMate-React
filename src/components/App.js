import React from 'react';
// import NavBar from './nav_bar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SocialEvents from './social_events'
import Chores from './chores'


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
        <h1> Welcome! </h1>
        <SocialEvents />
        <Chores />
       </div>
      </MuiThemeProvider>
   )
 }
