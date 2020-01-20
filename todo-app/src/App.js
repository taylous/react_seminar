import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert>
        Todo App을 만들자!
      </TodoInsert>
      <TodoList />
    </TodoTemplate>
    );
}

export default App;
