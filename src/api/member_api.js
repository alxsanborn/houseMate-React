class MemberApi {
  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getGroupMembers() {
    const headers = this.requestHeaders();
    const request = new Request(`http://localhost:3000/api/v1/users/`, {
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
}

export default MemberApi;
