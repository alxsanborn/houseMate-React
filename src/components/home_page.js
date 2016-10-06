import React from 'react';

import SignIn from './sign_in'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default (props) => {
   return (
    <MuiThemeProvider>
     <div>
        {!!sessionStorage.jwt ? 'visit your household!' : <SignIn />}

     </div>
    </MuiThemeProvider>
   )
 }