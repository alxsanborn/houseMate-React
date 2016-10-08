import EventAPI from '../api/event_api'
import * as types from './action_types';

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
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({event: newEventFromForm})
  }).then(response => {
    return response.json()
  }).then(newEventPayload => {
    return newEventPayload
  })
  return {type: 'ADD_EVENT', payload: newEventFromApi}
}

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
