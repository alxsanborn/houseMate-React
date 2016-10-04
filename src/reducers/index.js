import { combineReducers } from 'redux';
import  choresReducer from './chores_reducer'

const rootReducer = combineReducers({
  chores: choresReducer
})

export default rootReducer
