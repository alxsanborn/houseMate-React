// class GroupApi {
//   static getUserGroups(currentUserGroupId) {
//     const request = new Request('http://housemate-react.herokuapp.com/api/v1/groups', {
//       method: 'GET',
//       headers: {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
//     });

//   return fetch(request)
//     .then(response => {
//       return response.json();
//     })
//     .catch(error => {
//       return error;
//     })
//   }
// }

// export default GroupApi;