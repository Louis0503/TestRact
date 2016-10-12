import React from 'react';

const TodoList  = ({
  todos,
  onDeleteTodo,
}) => (
  <div>
    <ul>
      {
        todos.map((todo, index) => (
          <li key={index}>
            {todo.get('text')}
            <button onClick={onDeleteTodo(index)}>Delete</button>
          </li>
        )).toJS()
      }
    </ul>
  </div>
);

export default TodoList;
