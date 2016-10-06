// import React from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as sessionActions from '../actions/session_actions';

// import { Field, reduxForm } from 'redux-form'
// import TextField from 'material-ui/TextField'


// class SignUp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//      credentials: {
//                    firstName: '',
//                    lastName: '',
//                    email: '',
//                    password: ''
//                  }
//    }

//     this.onChange = this.onChange.bind(this);
//     this.onSave = this.onSave.bind(this);
//   }

//   onChange(event) {
//     const field = event.target.name;
//     const credentials = this.state.credentials;
//     credentials[field] = event.target.value;
//     return this.setState({credentials: credentials});
//   }

//   onSave(event) {
//     event.preventDefault();
//     debugger;
//     this.props.actions.signInUser(this.state.credentials);
//   }

//   render() {
//    return (
//       <div>
//         <form>
//           <TextField
//            hintText="Email"
//            floatingLabelText="Enter Email"
//            name="email"
//            label="email"
//            value={this.state.credentials.email}
//            onChange={this.onChange}
//           /><br />

//           <TextField
//            hintText="Password"
//            floatingLabelText="Enter Password"
//            type="password"
//            name="password"
//            label="password"
//            value={this.state.credentials.password}
//            onChange={this.onChange}
//           /><br />

//           <input
//             type="submit"
//             onClick={this.onSave}/>
//         </form>
//       </div>
//   );
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(sessionActions, dispatch)
//   };
// }

// export default connect(null, mapDispatchToProps)(SignUp)















// import React from 'react'

//  class SignUp extends React.Component {
//    constructor(props) {
//      super(props)
//      this.state = {
//        credentials: {
//                      firstName: '',
//                      lastName: '',
//                      email: '',
//                      password: ''
//                    }
//      }
//    }
//    signUpHandler(event) {
//      const field = event.target.name;
//      const credentials = this.state.credentials;
//      credentials[field] = event.target.value;
//      return this.setState({credentials: credentials});
//    }

//  render(){
//    return (
//      <div>
//      <h1>Sign Up!</h1>
//      <form onSubmit={this.signUpHandler}>
//      <label>first name: </label>
//      <input ref='firstName' />
//      <label>last name: </label>
//      <input ref='lastName' />
//      <label>password: </label>
//      <input type='password' ref='password'/>
//      <input type="submit"/>
//      </form>
//      </div>
//    )
//  }
//  }

//  module.exports = SignUp
