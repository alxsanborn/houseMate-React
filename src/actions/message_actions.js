import * as types from './action_types';
import messageApi from '../api/message_api';


export function fetchMessages() {
  return function(dispatch) {
    return messageApi.fetchMessages()
      .then(response => {
      return response.json());
    }).then(messagePayload => {
      return messagePayload
    })
  };
}
