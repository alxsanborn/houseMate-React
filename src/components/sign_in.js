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
   onChange(event) {
     const field = event.target.name;
     const credentials = this.state.credentials;
     credentials[field] = event.target.value;
     return this.setState({credentials: credentials});
   }

 render(){

   return (
     <form>
     </form>
   )


 }


 }
