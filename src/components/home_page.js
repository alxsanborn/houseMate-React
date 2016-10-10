import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/session_actions'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SignIn from './sign_in'
import Auth from '../auth/authenticator'



class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.checkSignedIn = this.checkSignedIn.bind(this)
  }

  checkSignedIn() {
    return Auth.signedIn()
  }

  render() {
   return (
    <MuiThemeProvider>
     <div>
        { this.checkSignedIn() ? 'SPLASH PAGE GOES HERE -- CAN ONLY BE SEEN WHEN SIGNED IN' : <SignIn />}
     </div>
    </MuiThemeProvider>
   )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(HomePage)
