import { useState } from 'react';
import TodoList from './TodoList';
import { createTodo, todos as defaultTodos } from '../data';
import { useCallback } from 'react';
import TodoCreator from '../components/TodoCreator';

const TodoContainer = () => {
  const [todos, setTodos] = useState(defaultTodos);

  const addTodo = useCallback((nextContent) => {
    setTodos((prevState) => [...prevState, createTodo(nextContent)]);
  }, []);

  //   const completeTodo = useCallback((todoId, nextDone) => {
  //     console.log(todoId, nextDone);
  //     // setTodos((prevState) => {
  //     //   prevState[todoId].done = nextDone;
  //     //   return prevState;
  //     // });
  //     setTodos((prevState) =>
  //       prevState.map((todo) => (todo.id === todoId ? { ...todo, done: nextDone } : todo)),
  //     );
  //   }, []);

  const completeTodo = useCallback((event) => {
    console.log(event.target.dataset);

    const { id } = event.target.dataset;

    if (id) {
      const targetId = parseInt(id, 10);
      setTodos((prevState) =>
        prevState.map((todo) => (todo.id === targetId ? { ...todo, done: !todo.done } : todo)),
      );
    }
  }, []);

  console.log(todos);

  return (
    <div>
      <TodoCreator addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} />
    </div>
  );
};

export default TodoContainer;
