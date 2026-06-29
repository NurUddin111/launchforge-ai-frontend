/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { LoginPayload } from "@/types/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useLogin = () => {
  const router = useRouter();

  const { setToken, setUser } = useAuthStore();

  return useMutation({
    mutationFn: (data: LoginPayload) => authService.login(data),

    onSuccess: async (response) => {
      const accessToken = response.data.data.accessToken;

      setToken(accessToken);

      const profile = await authService.me();

      setUser(profile.data.data);

      toast.success("Welcome back!");

      router.push("/dashboard");
    },

    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Login failed");
    },
  });
};
