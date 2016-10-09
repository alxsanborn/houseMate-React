import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SignIn from './sign_in'



export default (props) => {
   return (
    <MuiThemeProvider>
     <div>
        {!!sessionStorage.jwt ? 'visit your household!' : <SignIn />}

     </div>
    </MuiThemeProvider>
   )
 }