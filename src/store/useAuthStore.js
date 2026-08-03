import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set, get) => ({
      token: null,
      isAuthenticated: () => Boolean(get().token),
      setToken: (token) =>
        set({
          token,
        }),

      logout: () =>
        set({
          token: null,
        }),
    }),
    {
      name: 'auth',
    },
  ),
);

export default useAuthStore;
