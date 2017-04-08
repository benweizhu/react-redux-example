import { combineReducers } from 'redux';
import simpleTodoReducer from './simpleTodoReducer';

const allReducers = combineReducers({
  simpleTodo: simpleTodoReducer
});

export default allReducers;
