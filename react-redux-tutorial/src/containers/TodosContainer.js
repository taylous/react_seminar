import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';

import Todos from '../components/Todos';
import useActions  from '../lib/useActions';
import { changeInput, insert, toggle, remove } from '../modules/todos';
// import { changeInput, insert, toggle, remove } from '../modules/todos';


// const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }) => {
const TodosContainer = () => {
  const { input, todos } = useSelector(({todos}) => ({
    input: todos.input,
    todos: todos.todos
  }));
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );
  // const dispatch = useDispatch();

  // const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
  // const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
  // const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  // const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
  // return <Todos input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} />;
};

// const mapStateToProps = state => ({
//   input: () => state.todos.input,
//   todos: () => state.todos.todos
// });

// const mapStateToDispatch = {
//   changeInput,
//   insert,
//   toggle,
//   remove
// };

// export default connect(
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove
//   }
// )(TodosContainer);

export default TodosContainer;