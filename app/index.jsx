import ReactDOM from 'react-dom';
import React from 'react';
import SimpleTodo from './components/SimpleList';

const todos = [{ text: 'webpack' }, { text: 'react' }, { text: 'redux' }];

ReactDOM.render(
  <SimpleTodo todos={todos} />,
  document.querySelector('#app')
);
