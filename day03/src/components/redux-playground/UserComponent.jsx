import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUpdateNameAction } from '../../store/userReducer';

const UserComponent = () => {
  const dispatch = useDispatch();

  const name = useRef('');

  const user = useSelector((state) => state.user);

  console.log(user);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>이름: {user.name}</div>

      <div className="mt-5">
        <input
          type="text"
          className="mr-2 input input-bordered"
          onChange={(event) => {
            name.current = event.target.value;
          }}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            // dispatch({ type: 'UPDATE_NAME', payload: name.current });
            dispatch(createUpdateNameAction(name.current));
          }}
        >
          변경
        </button>
      </div>
    </div>
  );
};

export default UserComponent;
