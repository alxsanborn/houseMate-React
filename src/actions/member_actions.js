import MemberApi from '../api/event_api'
import * as types from './action_types';


export function fetchGroupMembersSuccess(response) {
  return {
    type: types.FETCH_MEMBERS,
    payload: response
  }
}

export function fetchGroupMembers() {
  return function(dispatch) {
    return MemberApi.getGroupMembers()
      .then(response => {
          debugger;
          dispatch(fetchGroupMembersSuccess(response));
        })
      .catch(error => {
        throw (error);
    });
  };
};