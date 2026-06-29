/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { GenerateStartupPayload, startupService } from "@/services/startup.service";

export function useGenerateStartup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: GenerateStartupPayload) => startupService.generate(data),

    onSuccess: () => {
      toast.success("Startup generated successfully");

      queryClient.invalidateQueries({
        queryKey: ["startups"],
      });

      queryClient.invalidateQueries({
        queryKey: ["stats"],
      });
    },

    onError: (error: any) => {
      toast.error(error?.response?.data?.message ?? "Failed to generate startup");
    },
  });
}
