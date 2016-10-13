import EventAPI from '../api/event_api'
import MessageApi from '../api/message_api';
import * as types from './action_types';
import MemberApi from '../api/member_api'

//MESSAGES

export function loadMessagesSuccess(messages) {
  return {type: 'FETCH_MESSAGES_SUCCESS', messages};
}

export function loadMessages() {
  return function(dispatch) {
    return MessageApi.fetchMessages().then(messages => {
      dispatch(loadMessagesSuccess(messages));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addMessageSuccess(message) {
  return {type: 'ADD_MESSAGE_SUCCESS', payload: message};
}

export function addMessage(newMessageFromForm){
  return function(dispatch) {
    return MessageApi.addMessage(newMessageFromForm).then(message => {
      dispatch(addMessageSuccess(message));
    }).catch(error => {
      throw(error);
    });
  };
}

//MEMBERS

export function fetchGroupMembersSuccess(response) {
  return {
    type: types.FETCH_MEMBERS,
    payload: response
  }
}

export function fetchGroupMembers() {
  return function(dispatch) {
    return MemberApi.getGroupMembers()
      .then(response => {
          return dispatch(fetchGroupMembersSuccess(response));
        })
      .catch(error => {
        throw (error);
    });
  };
};


//EVENTS

export function fetchEvents(){
  // create request
  const request = new Request('http://localhost:3000/api/v1/events', {
    method: 'GET',
    headers: {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  });

  // fetch using that request
  const events = fetch(request).then(
    response => {
      return response.json()
    }
  ).then(eventPayload => {
    return eventPayload
  })

  // return event type and payload
  return {
    type: 'FETCH_EVENTS',
    payload: events
  }
}

export function addEvent(newEventFromForm){
  const newEventFromApi = fetch('http://localhost:3000/api/v1/events', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
    },
    body: JSON.stringify({event: newEventFromForm})
  }).then(response => {
    return response.json()
  }).then(newEventPayload => {
    return newEventPayload
  })
  return {type: 'ADD_EVENT', payload: newEventFromApi}
}


export function editEventSuccess(evnt) {
  return {type: types.EDIT_EVENT_SUCCESS, evnt}
}

export function editEvent(evnt){
  return function(dispatch){
    return EventAPI.editEvent(evnt).then(responseEvent =>{
      console.log(`Edited ${evnt}`)
      dispatch(editEventSuccess(responseEvent));
    }).catch(error => {
      throw(error);
    })
  }}

export function deleteEventSuccess(evnt) {
   return {type: types.DELETE_EVENT_SUCCESS, evnt}
}

export function deleteEvent(evnt) {
   return function(dispatch) {
     return EventAPI.deleteEvent(evnt).then(() => {
       console.log(`Deleted ${evnt}`)
       dispatch(deleteEventSuccess(evnt));
       return;
     }).catch(error => {
       throw(error);
     })
   }}
