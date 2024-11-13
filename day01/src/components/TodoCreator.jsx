import { useRef } from 'react';
import { useState } from 'react';

const TodoCreator = ({ addTodo }) => {
  //   const [content, setContent] = useState('');
  const contentRef = useRef('');

  const handleContent = (event) => {
    // setContent(event.target.value);
    contentRef.current = event.target.value;
  };

  const handleClick = () => {
    addTodo(contentRef.current);
  };

  return (
    <div className="m-auto mb-2" style={{ width: 384 }}>
      <div className="flex items-center justify-between">
        <input
          className="w-full mr-3 input input-bordered input-xs"
          type="text"
          placeholder="입력해주세요."
          // value={content}
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
