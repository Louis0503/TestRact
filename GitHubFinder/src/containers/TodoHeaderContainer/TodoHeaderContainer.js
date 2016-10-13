import { connect } from 'react-redux';
import TodoHeader from '../../components/TodoHeader';

import {
  changeText,
  createTodo,
} from '../../actions';

const mapStateToProps = (state) => ({
  // get todo state from state
  todo: state.getIn(['todo', 'todo']),
});

const mapDispatchToProps = (dispatch) => ({
  // 當使用者在 input 輸入資料值即會觸發這個函數，發出 changeText action 並附上使用者輸入內容
  // event.target.value
  onChangeText: (event) => (
    dispatch(changeText({ text: event.target.value }))
  ),
  onCreateTodo: () => {
    dispatch(createTodo());
    dispatch(changeText({ text: '' }));
  },
});

const todoHeaderConnect = connect(
  mapStateToProps,
  mapDispatchToProps)(TodoHeader);

export default todoHeaderConnect;
