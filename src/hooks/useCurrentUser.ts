"use client";

import { useEffect } from "react";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

export const useCurrentUser = () => {
  const { accessToken, setUser, logout, setLoading } = useAuthStore();

  useEffect(() => {
    const loadUser = async () => {
      if (!accessToken) {
        setLoading(false);
        return;
      }

      try {
        const res = await authService.me();

        setUser(res.data.data);
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [accessToken, logout, setLoading, setUser]);
};
