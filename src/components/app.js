import React from 'react';

import { Grid } from 'react-flexbox-grid/lib/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import SocialEvents from './social_events/social_events_index'
import ChoresIndex from './chores/chores_index'
import Messages from './messages/messages_index'
import Bills from './bills/bills_index'

import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import SignIn from './sign_in';


export default (props) => {
   return (
    <Grid>
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

      {props.children}
     </div>
    </MuiThemeProvider>
    </Grid>
   )
 }
