"use client";

import { useQuery } from "@tanstack/react-query";
import { startupService } from "@/services/startup.service";

export function useStartupStats() {
  return useQuery({
    queryKey: ["stats"],
    queryFn: startupService.getStats,
  });
}