import { EventEmitter } from 'events';
import FluxDispatcher from '../dispatcher/FluxDispatcher';
import { ADD_TODO } from '../constants/actionTypes';

const store = {
  todos: [1, 2, 3],
  editing: false,
};

class TodoStoreClass extends EventEmitter {
  addChangeListener(callback) {
    this.on(ADD_TODO, callback);
  }
  removeChangeListener(callback) {
    this.removeChangeListener(ADD_TODO, callback);
  }
  getToDos() {
    return store.todos;
  }
}

const TodoStore = new TodoStoreClass();

FluxDispatcher.register((action) => {
  switch (action.type) {
    case ADD_TODO:
      store.todos.push(action.payload.text);
      TodoStore.emit(ADD_TODO);
      break;
    default:
      return true;
  }
  return true;
});

export default TodoStore;

