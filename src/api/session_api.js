class SessionApi {
  static signIn(credentials) {
    const request = new Request('http://housemate-api.herokuapp.com/api/v1/signin', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        auth: credentials
      })
    });


  return fetch(request)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    })
  }
}

export default SessionApi;