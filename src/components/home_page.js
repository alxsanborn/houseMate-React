import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/session_actions'
import { Link } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import SignIn from './sign_in'
import Auth from '../auth/authenticator'

const style = {
  position: 'absolute',
  zIndex: 1,
  fontFamily: 'Pacifico',
  fontSize: '50px',
  color: 'white',
  top: '20px',
  left: '330px'
}

class HomePage extends React.Component {
  constructor(props) {
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
          { this.checkSignedIn() ? (
              <div style={{position: 'relative'}}>
                <Link to="/home"> <h1 style={style}>Visit Your Household</h1> </Link>
                <Image source={ require('../../public/house.jpg') } />
              </div>
            ) : <SignIn />
          }
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
