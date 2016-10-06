import FluxDispatcher from '../dispatcher/FluxDispatcher';
import { ADD_TODO } from '../constants/actionTypes';

const ToDoAction = {
  addToDo(text) {
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

export { ToDoAction as default };
