import React from 'react';
import ReactDOM from 'react-dom';

import styles from '!style!css?modules!./styles.css';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import {Provider} from 'react-redux'
import configureStore from './store/configure_store';


import injectTapEventPlugin from 'react-tap-event-plugin';



const store = configureStore();

console.log(store.getState());

injectTapEventPlugin();
ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
  document.getElementById('root')
);
