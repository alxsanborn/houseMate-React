import { combineReducers } from 'redux';
import eventsReducer from './events_reducer'
import membersReducer from './members_reducer'
import sessionReducer from './session_reducer';
import messagesReducer from './messages_reducer';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
  session: sessionReducer,
<<<<<<< HEAD
  messages: messagesReducer,
=======
  // group: groupReducer,
  members: membersReducer,
  events: eventsReducer,
>>>>>>> 1341d216a6c3901e7e7dafb04dd7efc915fd6fd3
  form: formReducer
})

export default rootReducer
