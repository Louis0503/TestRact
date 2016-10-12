import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';

import {
  deleteTodo,
} from '../../actions';

const mapStateToProps = (state) => ({
  // get todo state from state
  todos: state.getIn(['todo', 'todos']),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (index) => () => (
      dispatch(deleteTodo({ index }))
  ),
});

const todoListConnect = connect(
  mapStateToProps,
  mapDispatchToProps)(TodoList);

export default todoListConnect;
