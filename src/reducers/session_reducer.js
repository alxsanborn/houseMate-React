import * as types from '../actions/action_types';
import initialState from './initial_state';
import {browserHistory} from 'react-router';

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type) {
    case types.SIGNIN_IN_SUCCESS:
      browserHistory.push('/')
      return !!sessionStorage.jwt
    default:
      return state;
  }
}

