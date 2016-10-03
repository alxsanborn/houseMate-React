import React from 'react';
 import {Route} from 'react-router'

 import App from './components/App'
 import SignIn from './components/sign_in'
 import SignUp from './components/sign_up'

 export default (
   <div>
   <Route path="/signin" component={SignIn} />
   <Route path="/signup" component={SignUp} />
   <Route path='/' component={App} />
   </div>
 )
 //Don't nest navbar links in App
