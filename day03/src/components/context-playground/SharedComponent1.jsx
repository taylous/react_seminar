import { useContext } from 'react';
import { CountContext } from '../../context/count-context';
// import { CountContext } from '../../containers/ContextPlayground';

const SharedComponent1 = () => {
  const { count, setCount } = useContext(CountContext);
  console.log('[rendering] SharedComponent1');

  return (
    <div>
      <span className="text-xl">SharedComponent1 </span>
      <button
        className="btn btn-md btn-square btn-primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default SharedComponent1;
