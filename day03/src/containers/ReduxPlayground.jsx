import { Provider } from 'react-redux';
import rootReducer from '../store/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import UserComponent from '../components/redux-playground/UserComponent';

const clientStore = configureStore({
  reducer: rootReducer,
});

const ReduxPlayground = () => {
  return (
    <div>
      <Provider store={clientStore}>
        <UserComponent />
      </Provider>
    </div>
  );
};

export default ReduxPlayground;
