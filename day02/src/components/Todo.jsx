import { memo } from 'react';

const Todo = ({ id, content, done, completeTodo }) => {
  const handleChange = (event) => {
    event.stopPropagation();

    completeTodo(id, !done);
  };

  return (
    <div className="flex items-center justify-between w-80">
      <div>
        <span>{content}</span>
      </div>
      <div>
        <input
          className="checkbox checkbox-primary checkbox-xs"
          type="checkbox"
          name={`done_${id}`}
          checked={done}
          onChange={handleChange}
          data-id={id}
        />
      </div>
    </div>
  );
};

export default memo(Todo);
