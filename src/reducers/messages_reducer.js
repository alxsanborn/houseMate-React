import * as types from '../actions/action_types';
import initialState from './initial_state';

export default function messagesReducer(state = initialState.messages, action) {
  switch(action.type) {
    case 'FETCH_MESSAGES_SUCCESS':
      return action.messages
    case 'ADD_MESSAGE_SUCCESS':
      return [action.payload, ...state]
    default:
      return state;
  }
}
