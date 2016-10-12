// define TodoState data structure

import Immutable from 'immutable';

const TodoState = Immutable.fromJS({
  todos: [],
  todo: {
    id: '',
    text: '12312312',
    updateAt: '',
    completed: false,
  },
});

export default TodoState;
