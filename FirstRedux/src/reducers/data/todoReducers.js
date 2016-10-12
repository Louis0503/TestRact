import { handleActions } from 'redux-actions';
import TodoState from '../../constants/models';

import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_TEXT,
} from '../../constants/actionTypes';

/*
  mapping handle functions by receaved actions:
  (initialState, action) => newState and return the newState,
  so we use Immutable.Js in ../../constants/models
*/

const todoReducers = handleActions({
  [CREATE_TODO]: (state) => {
    const todos = state.get('todos').push(state.get('todo'));
    return state.set('todos', todos);
  },
  [DELETE_TODO]: (state, { payload }) => (
    state.set('todos', state.get('todos').splice(payload.index, 1))
  ),
  [CHANGE_TEXT]: (state, { payload }) => (
    state.merge({ todo: payload })
  ),
}, TodoState);

export default todoReducers;
