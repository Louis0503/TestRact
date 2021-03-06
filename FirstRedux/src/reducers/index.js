// use redux-immutable to make sure state is immutable
import { combineReducers } from 'redux-immutable';
import todoReducers from './data/todoReducers';

const rootReducer = combineReducers({
  todoReducers,
});

export default rootReducer;
