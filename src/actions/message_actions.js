import * as types from './action_types';
import messageApi from '../api/message_api';

export function loadMessagesSuccess(messages) {
  return {type: types.FETCH_MESSAGES_SUCCESS, messages};
}


export function loadMessages() {
  return function(dispatch) {
    return messageApi.fetchMessages().then(messages => {
      dispatch(loadMessagesSuccess(messages));
    }).catch(error => {
      throw(error);
    });
  };
}
