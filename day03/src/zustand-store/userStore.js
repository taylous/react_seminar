import { create } from 'zustand';

const initialState = {
  id: 0,
  name: '테스트',
  ssoId: 'react.meta',
};

const userStore = create((set) => ({
  ...initialState,
  updateUsername: (nextName) => set((state) => ({ ...state, name: nextName })),
  updateSsoId: (nextSsoId) => set((state) => ({ ...state, ssoId: nextSsoId })),
}));

export default userStore;
