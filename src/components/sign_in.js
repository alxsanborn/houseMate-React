import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../actions/session_actions';

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


import { Grid, Row, Col } from 'react-flexbox-grid';



class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    }
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDemoClick = this.onDemoClick.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({
      credentials: credentials
    });
  }

  onSave(event) {
    event.preventDefault()
    this.props.actions.signInUser(this.state.credentials);
  }

  onDemoClick(event) {
    event.preventDefault();

    this.setState({
      credentials: {email: "alex_s@gmail.com", password: "password"}
    });

    setTimeout(() => this.props.actions.signInUser({email: "alex_s@gmail.com", password: "password"}), 1000);
  }



  render() {
    return (
      <Grid>
        <Row style={{'padding': '100px 0 0 0'}} center="md">
          <Col md={3} >
          <form>
            <TextField
            className="email-field"
            hintText="Email"
            fullWidth={true}
            floatingLabelText="Enter Email"
            name="email"
            label="email"
            value={ this.state.credentials.email }
            onChange={ this.onChange } />
            <br />

            <TextField
            className="password-field"
            hintText="Password"
            fullWidth={true}
            floatingLabelText="Enter Password"
            type="password"
            name="password"
            label="password"
            value={ this.state.credentials.password }
            onChange={ this.onChange }
            />
            <br />
            <br/>

            <div>
              <RaisedButton
              className="sign-in-button"
              label="Sign In"
              fullWidth={ true }
              type='submit'
              onClick={ this.onSave }
              primary/>

              <RaisedButton
              label="or Sign In with Demo Account"
              onClick={ this.onDemoClick}
              fullWidth={true}
              labelStyle={{color: "gray"}}
              />
            </div>

          </form>

          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(SignIn)


