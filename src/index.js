import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import {Provider} from 'react-redux'
import configureStore from './store/configure_store';

import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import ReduxPromise from 'redux-promise'

import injectTapEventPlugin from 'react-tap-event-plugin';

import {fetchEvents} from './actions'

const store = configureStore();

console.log(store.getState());

injectTapEventPlugin();
ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}
   routes={routes} />
   </Provider>,
  document.getElementById('root')
);
