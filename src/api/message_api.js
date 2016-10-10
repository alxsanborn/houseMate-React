class MessageApi {
  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static fetchMessages() {
    const headers = this.requestHeaders();
    const request = new Request('http://localhost:3000/api/v1/messages', {
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

  static addMessage(){
    const headers = this.requestHeaders();
    const request = new Request('http://localhost:3000/api/v1/messages', {
      method: 'POST',
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
}

export default MessageApi;
