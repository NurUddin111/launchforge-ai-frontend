import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState, IUser } from "@/types/auth";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: true,

      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),

      setToken: (token) =>
        set({
          accessToken: token,
        }),

      setLoading: (loading) =>
        set({
          isLoading: loading,
        }),

      logout: () =>
        set({
          user: null,
          accessToken: null,
          isAuthenticated: false,
          isLoading: false,
        }),
    }),
    {
      name: "launchforge-auth",
      partialize: (state) => ({
        accessToken: state.accessToken,
      }),
    }
  )
);
