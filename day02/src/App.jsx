import TodoContainer from './containers/TodoContainer';
import TodoList from './containers/TodoList';

// 1. useReducer
// 2. useRef 활용
// 3. useEffect 활용

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
