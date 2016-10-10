import * as types from '../actions/action_types';
import initialState from './initial_state';

export default function messagesReducer(state = initialState.messages, action) {
  switch(action.type) {
    case types.FETCH_MESSAGES_SUCCESS:
      debugger;
      return action.messages
    default:
      return state;
  }
}
