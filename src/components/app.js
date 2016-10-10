import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './nav_bar';


export default (props) => {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
        { props.children }
      </div>
    </MuiThemeProvider>
  )
}






