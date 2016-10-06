import { EventEmitter } from 'events';
import FluxDispatcher from '../dispatcher/FluxDispatcher';
import { ADD_TODO } from '../constants/actionTypes';

const store = {
  todos: [],
  editing: false,
};

class TodoStoreClass extends EventEmitter {
  constructor(props) {
    super(props);
    this.text = store;
  }
  addChangeListener(callback) {
    this.on(ADD_TODO, callback);
  }
  removeChangeListener(callback) {
    this.removeChangeListener(ADD_TODO, callback);
  }
  getToDos() {
    return this.text.todos;
  }
}

const TodoStore = new TodoStoreClass();

FluxDispatcher.register((action) => {
  switch (action.type) {
    case ADD_TODO:
      store.todos.push(action.payload.text);
      TodoStore.emmit(ADD_TODO);
      break;
    default:
      return true;
  }
  return true;
});

export { TodoStore as default };
