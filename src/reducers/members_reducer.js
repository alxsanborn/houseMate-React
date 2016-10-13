import * as types from '../actions/action_types'

export default function membersReducer(state=[], action){
  switch (action.type){
    case types.FETCH_MEMBERS:
      return action.payload;
    case types.EDIT_EVENT_SUCCESS:
      // state -- includes all events
      // then it filters out the event we changed
      // adds it on at the end

      // refactor: don't use nested data for items that will need to be updated -- hard to do redux
      // users should keep track of their chores id, and then in mapStateToProps we can filter the chores (in their own object) based on that id

      let currentUser = state.filter(member => {return member.id === parseInt(sessionStorage.currentUser)})[0]
      let unchangedChores = currentUser.assigned_chores.filter(evnt => evnt.id !== action.evnt.id)
      let updatedChores = [...unchangedChores, Object.assign({}, action.evnt)]
      let changedUser = Object.assign(currentUser, {assigned_chores: updatedChores});
      return [...state.filter(member=> member.id !== changedUser.id), changedUser]
    case types.DELETE_EVENT_SUCCESS:
        // const newState = Object.assign([], state);
        // const indexOfEventToDelete = state.findIndex(evnt => {
        //   return evnt.id === action.evnt.id
        // })
        // newState.splice(indexOfEventToDelete, 1);
        // browserHistory.push('/home')
        // return newState;
        //
        // currentUser = state.filter(member => {return member.id === parseInt(sessionStorage.currentUser)})[0]
        // 
        //
        // let undeletedChores = currentUser.assigned_chores.filter(evnt => evnt.id !== action.evnt.id)
        // changedUser = Object.assign(currentUser, {assigned_chores: undeletedChores});
        // return [...state.filter(member=> member.id !== changedUser.id), changedUser]
    default:
      return state;
    }
}
