import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import allReducers from './reducers';
import SimpleTodo from './containers/SimpleTodo';


const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <SimpleTodo />
  </Provider>,
  document.querySelector('#app')
);
