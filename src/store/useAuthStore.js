import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,

      isAuthenticated: false,

      setToken: (token) =>
        set({
          token,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          token: null,
          isAuthenticated: false,
        }),
    }),

    {
      name: 'auth',
    },
  ),
);

export default useAuthStore;
