class EventApi {
  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static fetchEvents() {
    const headers = this.requestHeaders();
    const request = new Request('http://localhost:3000/api/v1/events', {
      method: 'GET',
      headers: headers
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
        .catch(error => {
          return error;
        });
  }

  static editEvent(selectedEvent) {
    const request = new Request(`http://localhost:3000/api/v1/events/${selectedEvent.id}`, {
      method: 'PUT',
      headers: new Headers({
          'Content-Type': 'application/json',
          'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
        }),
         body: JSON.stringify({event: selectedEvent})
    })
    return fetch(request)
      .then(response => {
        return response.json();
      })
        .catch(error => {
          return error;
        });
  }

  static deleteEvent(selectedEvent) {
    const headers = this.requestHeaders();
    const request = new Request(`http://localhost:3000/api/v1/events/${selectedEvent}`, {
    method: 'DELETE',
    headers: headers
  });

  return fetch(request).then(response => {
    return response.json();
  }).catch(error => {
    return error;
  });
}

}

export default EventApi;
