import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/session_actions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router';


import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Auth from '../auth/authenticator'


const style = {
    title: {
      cursor: 'pointer',
    }
  }


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {session: ''}
    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.handleSignOutClick = this.handleSignOutClick.bind(this);
  }

  handleTouchTap(event){
    event.preventDefault()
    browserHistory.push('/')
  }

  handleLogoClick(event){
    event.preventDefault()
    browserHistory.push('/home')
  }

  handleSignOutClick(event){
    event.preventDefault()
    this.props.actions.signOutUser()
  }

  render() {
   return (
    <MuiThemeProvider>
    <div>
       <AppBar
        title={<span style={style.title}>houseMate</span>}
        onTitleTouchTap={this.handleTouchTap}
        style={{
          fontFamily: 'Pacifico',
          backgroundColor: '#e3704d'
        }}
        iconElementLeft={<IconButton onClick={this.handleLogoClick}> <ActionHome style={{color: "white"}}  /> </IconButton>}
        iconElementRight={ this.props.session ? <FlatButton label="Sign Out" style={{color: "white"}} onTouchTap={this.handleSignOutClick} /> : <div />}
       />
     </div>
   </MuiThemeProvider>
   )
 }
}

function mapStateToProps(state) {
  return {
    session: Auth.signedIn(),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(NavBar)

// export default connect(null, mapDispatchToProps)(NavBar)




