// class GroupApi {
//   static getUserGroups(currentUserGroupId) {
//     const request = new Request('http://localhost:3000/api/v1/groups', {
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