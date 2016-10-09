import React from 'react';

import { Grid } from 'react-flexbox-grid/lib/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router';


import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';


  function handleLeftIconClick(event){

    event.preventDefault()
    debugger;
    browserHistory.push('/home')
  }

  function handleTouchTap(event){

    event.preventDefault()
    debugger;
    browserHistory.push('/')
  }

  const styles = {
    title: {
      cursor: 'pointer',
    }
  }



export default (props) => {
   return (
    <Grid>
    <MuiThemeProvider>
     <div>
       <AppBar
        title={<span style={styles.title}>houseMate</span>}
        onTitleTouchTap={handleTouchTap}
        style={{
          fontFamily: 'Pacifico',
          backgroundColor: '#e3704d'
        }}
        iconElementLeft={<IconButton onClick={handleLeftIconClick} > <ActionHome  /> </IconButton>}
       />
      {props.children}
     </div>
    </MuiThemeProvider>
    </Grid>
   )
 }
