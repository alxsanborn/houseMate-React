import { combineReducers } from 'redux';
import eventsReducer from './events_reducer'
import sessionReducer from './session_reducer';
import messagesReducer from './messages_reducer';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
  events: eventsReducer,
  session: sessionReducer,
  messages: messagesReducer,
  form: formReducer
})

export default rootReducer
