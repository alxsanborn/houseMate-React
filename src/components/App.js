import React from 'react';
// import NavBar from './nav_bar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

const style = {
  height: 800,
  width: 400,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

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
        <Paper style={style} zDepth={2} >
          {"Hello!"}
        </Paper>
        <Paper style={style} zDepth={2} >
          {"Hello!"}
        </Paper>
       </div>
      </MuiThemeProvider>
   )
 }
