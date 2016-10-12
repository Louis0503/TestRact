import FluxDispatcher from '../dispatcher/FluxDispatcher';
import { ADD_TODO } from '../constants/actionTypes';

const TodoActions = {
  addTodo(text) {
    FluxDispatcher.handleAction(
      {
        type: ADD_TODO,
        payload: {
          text,
        },
      }
    );
  },
};

export { TodoActions as default };

