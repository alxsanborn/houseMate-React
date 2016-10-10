import * as types from './action_types';
import SessionApi from '../api/session_api';
// import Auth from '../auth/authenticator'


//////////////SIGNING IN////////////////


export function signInSuccess(response) {
  debugger;
  return {
    type: types.SIGN_IN_SUCCESS,
    current_user: response.current_user
  }
}

export function signInFailure(response) {
  return {
    type: types.SIGN_IN_FAILURE,
    current_user: null,
    errors: response.errors
    //include errors from api here to display
  }
}

export function signInUser(credentials) {
  return function(dispatch) {
    return SessionApi.signIn(credentials)
      .then(response => {
        debugger;
        if (response.jwt.length >= 0) {
          sessionStorage.setItem('jwt', response.jwt);
          return dispatch(signInSuccess(response));
        } else {
          return dispatch(signInFailure(response));
        }
    }).catch(error => {
        throw (error);
    });
  };
}


/////////////SIGNING OUT//////////////

export function signOutSuccess() {
  return {
    type: types.SIGN_OUT_SUCCESS,
    current_user: null
  }
}

export function signOutUser() {
  return function(dispatch) {
    return dispatch(signOutSuccess())
  }
}

