const defaultEvents = [{id: 1, name: "Mop the floors", created_by: 1}, {id: 2, name: 'clean the bathtub', created_by: 2}]

export function fetchEvents(){
  const events = fetch('http://localhost:3000/api/v1/events').then(
    response => {
      return response.json()
    }
  ).then(eventPayload => {
    return eventPayload
  })

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
  }).then(response=>{
    return response.json()
  }).then(newEventPayload => {
    return newEventPayload
  })
  return {type: 'ADD_EVENT', payload: newEventFromApi}
}
