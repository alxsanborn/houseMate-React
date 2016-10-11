import MemberApi from '../api/member_api'
import * as types from './action_types'


export function fetchGroupMembersSuccess(response) {
  return {
    type: 'FETCH_MEMBERS',
    payload: response
  }
}

export function fetchGroupMembers() {
  return function(dispatch) {
    return MemberApi.getGroupMembers()
      .then(response => {
          dispatch(fetchGroupMembersSuccess(response));
        })
      .catch(error => {
        throw (error);
    });
  };
};
