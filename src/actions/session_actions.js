import * as types from './action_types';
import sessionApi from '../api/session_api';
import {fetchEvents} from './index.js'

export function signinSuccess() {
  return {
    type: types.SIGN_IN_SUCCESS
  }
}

export function signInUser(credentials) {
  return function(dispatch) {
    return sessionApi.signin(credentials)
      .then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      //setState() to have current user here
      dispatch(signinSuccess());
    }).catch(error => {
      throw (error);
    });
  };
}
