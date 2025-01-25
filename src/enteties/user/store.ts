import { createZustandStore } from '../../shared/lib/zustand/store';

type UserState = {
  user: { name: string; password: string } | null;
  setUser: (user: UserState['user']) => void;
  clearUser: () => void;
};

export const useUserStore = createZustandStore<UserState>((set) => ({
  user: null,
  setUser: (user) =>
    set((state) => {
      state.user = user;
    }),
  clearUser: () =>
    set((state) => {
      state.user = null;
    }),
}));
