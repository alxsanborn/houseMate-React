import { combineReducers } from 'redux';
import  eventsReducer from './events_reducer'

const rootReducer = combineReducers({
  events: eventsReducer
})

export default rootReducer
