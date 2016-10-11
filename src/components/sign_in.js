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
    event.preventDefault();
    this.props.actions.signInUser(this.state.credentials);
  }

  render() {
    return (
      <Grid>
        <Row style={{'padding-top': '100px'}} center="md">
          <Col md={3} >
          <form>
            <TextField hintText="Email"
            fullWidth={true}
            floatingLabelText="Enter Email"
            name="email" label="email"
            value={ this.state.credentials.email }
            onChange={ this.onChange } />
            <br />

            <TextField hintText="Password"
            fullWidth={true}
            floatingLabelText="Enter Password"
            type="password" name="password"
            label="password"
            value={ this.state.credentials.password }
            onChange={ this.onChange }
            />
            <br />

            <div>
              <RaisedButton
              label="Sign In"
              fullWidth={ true }
              type='submit'
              onClick={ this.onSave }
              primary/>
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
