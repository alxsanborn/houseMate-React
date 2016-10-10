import { combineReducers } from 'redux';
import eventsReducer from './events_reducer'
import membersReducer from './members_reducer'
import sessionReducer from './session_reducer';
import messagesReducer from './messages_reducer';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
  session: sessionReducer,

  members: membersReducer,
  events: eventsReducer,

  form: formReducer
})

export default rootReducer
