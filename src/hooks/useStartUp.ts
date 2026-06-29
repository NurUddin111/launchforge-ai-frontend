"use client";

import { useQuery } from "@tanstack/react-query";
import { startupService } from "@/services/startup.service";

export function useStartups() {
  return useQuery({
    queryKey: ["startups"],
    queryFn: async () => {
      const res = await startupService.getAll();
      return res.data.data; // { meta, data }
    },
  });
}
