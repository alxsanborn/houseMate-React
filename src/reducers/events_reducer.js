import {browserHistory} from 'react-router'
import * as types from '../actions/action_types'

export default function eventsReducer(state=[], action){
  switch (action.type){
    case 'FETCH_EVENTS':
      return action.payload;
    case 'ADD_EVENT':
    return [...state, action.payload];
    case types.DELETE_EVENT_SUCCESS:
      const newState = Object.assign([], state);
      const indexOfEventToDelete = state.findIndex(evnt => {
        return evnt.id === action.evnt.id
      })
      newState.splice(indexOfEventToDelete, 1);
      browserHistory.push('/events');
      return newState;
    default:
      return state;
    }
}
