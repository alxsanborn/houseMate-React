import React from 'react'

 class SignUp extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       credentials: {
                     firstName: '',
                     lastName: '',
                     email: '',
                     password: ''
                   }
     }
   }
   signUpHandler(event) {
     const field = event.target.name;
     const credentials = this.state.credentials;
     credentials[field] = event.target.value;
     return this.setState({credentials: credentials});
   }

 render(){
   return (
     <div>
     <h1>Sign Up!</h1>
     <form onSubmit={this.signUpHandler}>
     <label>first name: </label>
     <input ref='firstName' />
     <label>last name: </label>
     <input ref='lastName' />
     <label>password: </label>
     <input type='password' ref='password'/>
     <input type="submit"/>
     </form>
     </div>
   )
 }
 }

 module.exports = SignUp
