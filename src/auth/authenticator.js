import {browserHistory} from 'react-router';

class Auth {
  static signedIn() {
    return !!sessionStorage.jwt;
  }

  static signOut() {
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('currentUser');
    browserHistory.push('/')
  }
}

export default Auth;
