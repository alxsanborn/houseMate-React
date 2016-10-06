import { combineReducers } from 'redux';
import  eventsReducer from './events_reducer'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  events: eventsReducer,
  form: formReducer
})

export default rootReducer
