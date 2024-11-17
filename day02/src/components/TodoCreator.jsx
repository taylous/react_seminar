import { useRef } from 'react';

const TodoCreator = ({ addTodo }) => {
  const contentRef = useRef('');

  const handleContent = (event) => {
    contentRef.current = event.target.value;
  };

  const handleClick = () => {
    addTodo(contentRef.current);
  };

  console.log('TodoCreator rendering...');

  return (
    <div className="m-auto mb-2" style={{ width: 384 }}>
      <div className="flex items-center justify-between">
        <input
          className="w-full mr-3 input input-bordered input-xs"
          type="text"
          placeholder="입력해주세요."
          onChange={handleContent}
        />
        <button className="btn btn-xs" onClick={handleClick}>
          +
        </button>
      </div>
    </div>
  );
};

export default TodoCreator;
