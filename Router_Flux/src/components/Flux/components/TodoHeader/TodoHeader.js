import React, { Component } from 'react';
import TodoActions from '../../actions/todoActions';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.state = {
      text: '',
      editing: false,
    };
  }
  // Change value in views
  onChange(event) {
    this.setState({
      text: event.target.value,
    });
  }
  // Call Actions
  onAdd() {
    TodoActions.addTodo(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div className="active">
        <h1>TodoFlux</h1>
        <div>
          <input
            value={this.state.text}
            type="text"
            placeholder="please add ToDoList"
            onChange={this.onChange}
          />
          <button
            onClick={this.onAdd}
          >
          Add ToDo
          </button>
        </div>
      </div>
    );
  }
}

export default TodoHeader;
