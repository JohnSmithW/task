import { createStore, type StateCreator } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const createZustandStore = <T extends object>(
  initializer: StateCreator<T, [['zustand/immer', never]]>,
) => createStore<T>()(immer(initializer));

// For persisted stores
export const createPersistedStore = <T extends object>(
  key: string,
  initializer: StateCreator<T, [['zustand/immer', never]]>,
) =>
  createStore<T>()(
    persist(immer(initializer), {
      name: key,
      storage: createJSONStorage(() => localStorage),
    }),
  );
