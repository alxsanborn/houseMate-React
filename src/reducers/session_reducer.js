import * as types from '../actions/action_types';
import initialState from './initial_state';
import {browserHistory} from 'react-router';

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type) {
    case types.SIGN_IN_SUCCESS:
      // add current user_id to state
      browserHistory.push('/home')

      return !!sessionStorage.jwt
    default:
      return state;
  }
}
