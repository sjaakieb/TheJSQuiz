import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Router from './Router';
import AppState from './stores/AppState';
import './styles/main.scss';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={new AppState()}>
    <Router store={new AppState()} />
  </Provider>,
  rootEl,
);
