import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import {Provider} from 'react-redux'

import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import ReduxPromise from 'redux-promise'

import {fetchChores} from './actions'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(rootReducer)

store.dispatch(fetchChores())
//debugger

console.log(store.getState())

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
//http://stackoverflow.com/a/34015469/988941

injectTapEventPlugin();
ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}
   routes={routes} />
   </Provider>,
  document.getElementById('root')

);
