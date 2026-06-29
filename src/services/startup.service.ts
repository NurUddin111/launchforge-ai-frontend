import { api } from "@/lib/axios";

export interface GenerateStartupPayload {
  idea: string;
  industry: string;
  targetAudience?: string;
  budget?: number;
  country?: string;
}

export const startupService = {
  generate: (data: GenerateStartupPayload) => api.post("/startup/generate", data),

  getAll: (params?: Record<string, unknown>) => api.get("/startup", { params }),

  getBySlug: (slug: string) => api.get(`/startups/${slug}`),

  favorite: (id: string) => api.patch(`/startups/${id}/favorite`),

  delete: (id: string) => api.delete(`/startups/${id}`),

  getStats: () => api.get("/startups/stats"),
};
