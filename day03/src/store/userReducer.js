const initialState = {
  id: 0,
  ssoId: 'react.meta',
  name: 'React',
};

const SET_USER = 'SET_USER';
const UPDATE_NAME = 'UPDATE_NAME';

export const createSetUserAction = (user) => ({
  type: SET_USER,
  payload: user,
});

export const createUpdateNameAction = (name) => ({
  type: UPDATE_NAME,
  payload: name,
});

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...action.payload,
      };
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
