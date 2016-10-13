import React from 'react';
import {Route, IndexRoute} from 'react-router'

import App from './components/App'
import HomeContainer from './components/home_container'
import HomePage from './components/home_page'

 export default (
   <div>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/home" component={HomeContainer} onEnter={requireAuth}/>
    </Route>
   </div>
 )


 function requireAuth(nextState, replace) {
  if (sessionStorage.jwt === undefined) {
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
