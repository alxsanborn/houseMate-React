// header string
//const requestHeaders = {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}

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
