import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise'


export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, ReduxPromise)
)};