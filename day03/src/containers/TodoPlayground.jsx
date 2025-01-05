import { useSyncExternalStore } from 'react';
import { todosStore } from '../store/todoStore';
import TodosComponent from '../components/todo-playground/TodosComponent';

const TodoPlayground = () => {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);

  return (
    <div className="flex flex-col items-center justify-start h-screen mt-10">
      <button className="btn btn-outline btn-primary" onClick={() => todosStore.addTodo()}>
        Add todo
      </button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <TodosComponent />
      <TodosComponent />
    </div>
  );
};

export default TodoPlayground;
