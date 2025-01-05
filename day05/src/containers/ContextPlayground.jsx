import { createContext, useContext, useState } from 'react';
import SharedComponent1 from '../components/context-playground/SharedComponent1';
import SharedComponent2 from '../components/context-playground/SharedComponent2';
import CounterContext from '../context/count-context';

// export const CountContext = createContext(null);

const CountContextProvider = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <CounterContext>
        <SharedComponent1 />
        <SharedComponent2 />
      </CounterContext>
    </div>
  );
};

export default CountContextProvider;
