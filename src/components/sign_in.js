import React from 'react'

 class SignIn extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       credentials: {email: '',
                     password: ''
                   }
     }
   }
   signInHandler(event) {
     const field = event.target.name;
     const credentials = this.state.credentials;
     credentials[field] = event.target.value;
     return this.setState({credentials: credentials});
   }

 render(){
   return (
     <div>
     <h1>Sign In!</h1>
     <form onSubmit={this.signInHandler}>
     <label>email: </label>
     <input ref='email' />
     <label>password: </label>
     <input type='password' ref='password'/>
     <input type="submit"/>
     </form>
     </div>
   )
 }
 }

 module.exports = SignIn
