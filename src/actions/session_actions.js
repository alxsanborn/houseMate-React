import * as types from './action_types';
import sessionApi from '../api/session_api';

export function signinSuccess(response) {
  return {
    type: types.SIGN_IN_SUCCESS,
    current_user: response.current_user
  }
}

export function signInUser(credentials) {
  return function(dispatch) {
    return sessionApi.signin(credentials)
      .then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(signinSuccess(response));
    }).catch(error => {
      throw (error);
    });
  };
}
