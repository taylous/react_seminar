import TodoContainer from './containers/TodoContainer';
import TodoList from './containers/TodoList';

function App() {
  return (
    <div className="py-5">
      <div className="mb-3 text-center">
        <span className="text-3xl font-bold">TODO List🎯</span>
      </div>

      <div>
        <TodoContainer />
      </div>
    </div>
  );
}

export default App;
