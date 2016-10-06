import { combineReducers } from 'redux';
import eventsReducer from './events_reducer'
import session from './session_reducer';
import {reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({
  events: eventsReducer,
  session: session,
  form: formReducer
})

export default rootReducer
