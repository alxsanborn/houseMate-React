class Auth {
  static signedIn() {
    return !!sessionStorage.jwt;
  }

  static signOut() {
    sessionStorage.removeItem('jwt');
  }
}

export default Auth;