import { useShallow } from 'zustand/shallow';
import userStore from '../../zustand-store/userStore';

const NameComponent = () => {
  const name = userStore(useShallow((state) => state.name));

  console.log('[rendering] NameComponent');

  return <div>이름: {name}</div>;
};

export default NameComponent;
