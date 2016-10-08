import * as types from '../actions/action_types';
import initialState from './initial_state';
import {browserHistory} from 'react-router';
import {fetchEvents} from '../actions'

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type) {
    case types.SIGN_IN_SUCCESS:
      // add current user_id to state
      debugger;
      browserHistory.push('/home')
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
