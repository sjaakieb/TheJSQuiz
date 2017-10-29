import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Router from './Router';
import AppState from './stores/AppState';
import './styles/main.scss';

// Register service worker
import './registerServiceWorkers';

ReactDOM.render(
  <Provider store={new AppState()}>
    <Router store={new AppState()} />
  </Provider>,
  document.getElementById('root'),
);
