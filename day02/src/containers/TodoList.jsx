import Todo from '../components/Todo';

const TodoList = ({ todos, completeTodo }) => {
  console.log('TodoList rendering...');

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
