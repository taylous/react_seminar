import { useRef } from 'react';
import NameComponent from '../components/zustand-playground/NameComponent';
import SsoIdComponent from '../components/zustand-playground/SsoIdComponen';
import userStore from '../zustand-store/userStore';
import { useShallow } from 'zustand/shallow';

const ZustandPlayground = () => {
  const ssoId = useRef('');

  const updateSsoId = userStore(useShallow((state) => state.updateSsoId));

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <NameComponent />
      <SsoIdComponent />

      <div className="mt-5">
        <input
          type="text"
          className="mr-2 input input-bordered"
          onChange={(event) => {
            ssoId.current = event.target.value;
          }}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            updateSsoId(ssoId.current);
          }}
        >
          변경
        </button>
      </div>
    </div>
  );
};

export default ZustandPlayground;
