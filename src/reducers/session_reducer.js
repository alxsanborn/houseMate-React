import * as types from '../actions/action_types';
import initialState from './initial_state';
import {browserHistory} from 'react-router';
import Auth from '../auth/authenticator'

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type) {
    case types.SIGN_IN_SUCCESS:
      browserHistory.push('/home')
      debugger
      return {...state, status: !!sessionStorage.jwt, current_user: action.current_user }
    case types.SIGN_OUT_SUCCESS:
      Auth.signOut()
      return {...state, status: !!sessionStorage.jwt, current_user: action.current_user}
    default:
      return state;
  }
}
