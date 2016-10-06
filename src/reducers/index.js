import { combineReducers } from 'redux';
import eventsReducer from './events_reducer'
import session from './session_reducer';


const rootReducer = combineReducers({
  events: eventsReducer,
  session: session
})

export default rootReducer
