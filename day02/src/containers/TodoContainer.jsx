import { useState, useCallback, useEffect, useRef } from 'react';
import TodoList from './TodoList';
import TodoCreator from '../components/TodoCreator';
import { createTodo, todos as defaultTodos } from '../data';
import axios from 'axios';

const TodoContainer = () => {
  const inputRef = useRef('');

  // const [hasFocus, setHasFocus] = useState(false);
  // const [todos, setTodos] = useState(defaultTodos);
  const [todos, setTodos] = useState(null);

  const addTodo = useCallback((nextContent) => {
    setTodos((prevState) => [...prevState, createTodo(nextContent)]);
  }, []);

  const completeTodo = useCallback((targetId, done) => {
    setTodos((prevState) =>
      prevState.map((todo) => (todo.id === targetId ? { ...todo, done } : todo)),
    );

    const input = inputRef.current;
    if (input) {
      input.focus();
    }
    // setHasFocus(true);
  }, []);

  // useEffect(() => {
  //   setHasFocus(true);
  // }, []);

  // const getData = async () => {
  //   const result = await fetch('http://localhost:3000/todo/list', {
  //     method: 'GET',
  //   });
  //   const data = await result.json();
  //   return data;
  // };

  useEffect(() => {
    if (!todos) {
      const source = axios.CancelToken.source();

      const getData = async () => {
        const result = await axios.get('http://localhost:3000/todo/list', {
          cancelToken: source.token,
        });
        return result.data;
      };

      getData().then((result) => {
        setTodos(result);
      });

      return () => {
        console.log('unmount');
        source.cancel();
      };
    }
    return () => {};
  }, []);

  console.log(todos);

  return (
    <div>
      <TodoCreator
        ref={inputRef}
        addTodo={addTodo}
        // hasFocus={hasFocus}
      />
      <TodoList todos={todos || []} completeTodo={completeTodo} />
    </div>
  );
};

export default TodoContainer;
