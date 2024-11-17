const Header = ({ todos }) => {
  console.log('Header rendering...');
  return (
    <div className="m-auto mb-2" style={{ width: 384 }}>
      <span className="text-xs font-semibold">
        남은 할 일: {todos.filter((todo) => !todo.done).length}
      </span>
    </div>
  );
};

export default Header;
