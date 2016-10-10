import {browserHistory} from 'react-router';


class Auth {
  static signedIn() {
    return !!sessionStorage.jwt;
  }

  static signOut() {
    sessionStorage.removeItem('jwt');
    browserHistory.push('/')
  }
}

export default Auth;