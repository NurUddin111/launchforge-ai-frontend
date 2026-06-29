/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: authService.register,

    onSuccess: () => {
      toast.success("Account created successfully");

      router.push("/login");
    },

    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Registration failed");
    },
  });
};
