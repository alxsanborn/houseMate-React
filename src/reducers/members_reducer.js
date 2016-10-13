import * as types from '../actions/action_types'

export default function membersReducer(state=[], action){
  switch (action.type){
    case types.FETCH_MEMBERS:
      return action.payload;
    default:
      return state;
    }
}
