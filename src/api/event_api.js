class EventApi {
  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static fetchEvents() {
    const headers = this.requestHeaders();
    const request = new Request('http:housemate-api.herokuapp.com/api/v1/events', {
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

  static deleteEvent(selectedEvent) {
    const headers = this.requestHeaders();
    const request = new Request(`http:housemate-api.herokuapp.com/api/v1/events/${selectedEvent}`, {
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
