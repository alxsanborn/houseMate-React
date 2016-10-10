import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router';

import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';

  function handleTouchTap(event){
    event.preventDefault()
    browserHistory.push('/')
  }

  function handleLogoClick(event){
    event.preventDefault()
    browserHistory.push('/home')
  }

  function handleSignoutClick(event){
    event.preventDefault()
    sessionStorage.removeItem("jwt")
    browserHistory.push('/')
  }



  const styles = {
    title: {
      cursor: 'pointer',
    }
  }

export default (props) => {
   return (
    <MuiThemeProvider>
     <div>
       <AppBar
        title={<span style={styles.title}>houseMate</span>}
        onTitleTouchTap={handleTouchTap}
        style={{
          fontFamily: 'Pacifico',
          backgroundColor: '#e3704d'
        }}
        iconElementLeft={<IconButton onClick={handleLogoClick}> <ActionHome style={{color: "white"}}  /> </IconButton>}
        iconElementRight={!!sessionStorage.jwt ? <FlatButton label="Sign Out" fullWidth={true} onClick={handleSignoutClick} /> : '' }
       />
      {props.children}
     </div>
    </MuiThemeProvider>
   )
 }






