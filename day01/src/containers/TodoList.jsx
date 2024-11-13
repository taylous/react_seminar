import { useState } from 'react';
import { createTodo, todos as defaultTodos } from '../data';
import Todo from '../components/Todo';
import { useCallback } from 'react';
import TodoCreator from '../components/TodoCreator';

const TodoList = ({ todos, completeTodo }) => {
  // const [todos, setTodos] = useState(defaultTodos);

  // const [content, setContent] = useState('');

  // const handleContent = (event) => {
  //   setContent(event.target.value);
  // };

  // const addTodo = useCallback((nextContent) => {
  //   setTodos((prevState) => [...prevState, createTodo(nextContent)]);
  // }, []);

  // const completeTodo = useCallback((todoId, nextDone) => {
  //   console.log(todoId, nextDone);
  //   // setTodos((prevState) => {
  //   //   prevState[todoId].done = nextDone;
  //   //   return prevState;
  //   // });
  //   setTodos((prevState) =>
  //     prevState.map((todo) => (todo.id === todoId ? { ...todo, done: nextDone } : todo)),
  //   );
  // }, []);

  // const handleClick = (event) => {
  //   console.log(event.target.dataset);
  // };

  // return (
  //   <div>
  //     <div className="m-auto mb-2" style={{ width: 384 }}>
  //       <TodoCreator addTodo={addTodo} />
  //     </div>

  //     <div
  //       className="px-8 m-auto border rounded-lg border-rose-300"
  //       style={{ width: 384 }}
  //       onClick={handleClick}
  //     >
  //       {todos.map((todo) => (
  //         <Todo {...todo} completeTodo={completeTodo} key={`todo-${todo.id}`} />
  //       ))}
  //     </div>
  //   </div>
  // );

  console.log(todos);
  return (
    <div
      className="px-8 m-auto border rounded-lg border-rose-300"
      style={{ width: 384 }}
      onClick={completeTodo}
    >
      {todos.map((todo) => (
        <Todo {...todo} completeTodo={completeTodo} key={`todo-${todo.id}`} />
      ))}
    </div>
  );
};

export default TodoList;
