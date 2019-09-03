import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './loader.css';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { reducer } from './reducers';

const store = createStore(reducer, applyMiddleware(
  thunkMiddleware,
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
