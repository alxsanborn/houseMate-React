import React from 'react';
import ReactDOM from 'react-dom';

//import './index.css';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
//http://stackoverflow.com/a/34015469/988941

injectTapEventPlugin();
ReactDOM.render(
  <Router history={browserHistory}
   routes={routes} />,
  document.getElementById('root')

);
