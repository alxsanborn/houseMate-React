import React from 'react';
 import {Route} from 'react-router'

 import App from './components/App'
 import SignIn from './components/sign_in'

 export default (
   <Route path='/' component={App} >
     <Route path="/signin" component={SignIn} />
   </Route>
 )
