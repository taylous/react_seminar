import React from 'react';
import ReactDOM from 'react-dom';

// Import redux
import { createStore } from 'redux';
// Provider
import { Provider } from 'react-redux';

// Import devtools
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './modules';

// Create Store
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
