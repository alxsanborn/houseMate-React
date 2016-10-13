// import * as types from './action_types';
// import EventApi from '../api/event_api';

// export function returnEvents(){
//   return function(dispatch) {
//     return EventApi.fetchEvents().then(events => {
//       dispatch(returnEventsSuccess(events));
//     }).catch(error => {
//       throw(error);
//     });
//   }
// }

// export function addEvent(newEventFromForm){
//   const newEventFromApi = fetch('http://housemate-react.herokuapp.com/api/v1/events', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({event: newEventFromForm})
//   }).then(response => {
//     return response.json()
//   }).then(newEventPayload => {
//     return newEventPayload
//   })
//   return {type: 'ADD_EVENT', payload: newEventFromApi}
// }
