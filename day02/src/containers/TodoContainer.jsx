import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

import TodoCreator from '../components/TodoCreator';
import TodoList from './TodoList';
import Header from '../components/common/Header';

import { createTodo, todos as defaultTodos } from '../data';

const TodoContainer = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return defaultTodos;
  });

  const addTodo = useCallback((nextContent) => {
    setTodos((prevState) => [...prevState, createTodo(nextContent)]);
  }, []);

  const completeTodo = useCallback((event) => {
    const $target = event.target;

    if ($target) {
      const $input = $target.closest('input');
      const { id } = $input.dataset;

      if (id) {
        const targetId = parseInt(id, 10);
        setTodos((prevState) =>
          prevState.map((todo) => (todo.id === targetId ? { ...todo, done: !todo.done } : todo)),
        );
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  console.log('TodoContainer rendering...');

  return (
    <div>
      <Header todos={todos} />
      <TodoCreator addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} />
    </div>
  );
};

export default TodoContainer;
