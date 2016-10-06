import React from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

class Flux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList />
      </div>
    );
  }
}

export default Flux;
