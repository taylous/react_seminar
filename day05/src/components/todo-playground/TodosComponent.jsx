import { useSyncExternalStore } from 'react';
import { todosStore } from '../../store/todoStore';

const TodosComponent = () => {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);

  return (
    <div>
      {todos.map(({ id }, index) => (
        <span key={`${id}_${index}`}>{id}</span>
      ))}
    </div>
  );
};

export default TodosComponent;
