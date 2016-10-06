import React from 'react';
import {Route, IndexRoute, browserHistory} from 'react-router'

import App from './components/app'
import HomeContainer from './components/home_container'
import SignIn from './components/sign_in'
// import SignUp from './components/sign_up'
import auth from './auth/authenticator';
import HomePage from './components/home_page'

 export default (
   <div>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/home" component={HomeContainer} onEnter={requireAuth}/>
    </Route>
   </div>
 )
//Don't nest navbar links in App
//



 function requireAuth(nextState, replace) {

  if (!sessionStorage.jwt) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

/*
<div>
  <Route path='/' component={App}>
     <Route path="/signup" component={SignUp} />
     <Route path="/signin" component={SignIn} />
     <Route path="/events" onEnter={ requireAuth } component={ EventsIndex } >
       <Route path="/events/new" component={ EventNew } />
       <Route path="/events/:id" component={ EventShow } />
     </Route>
  </Route>
</div>
 */
