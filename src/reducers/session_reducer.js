import * as types from '../actions/action_types';
import initialState from './initial_state';
import {browserHistory} from 'react-router';

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type) {
    case types.SIGN_IN_SUCCESS:
      const newState = {status: !!sessionStorage.jwt, current_user: action.current_user}
      browserHistory.push('/home')
      return newState
    default:
      return state;
  }
}
