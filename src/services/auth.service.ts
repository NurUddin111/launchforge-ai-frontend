import { api } from "@/lib/axios";
import { LoginPayload, RegisterPayload } from "@/types/auth";

export const authService = {
  register: (data: RegisterPayload) => api.post("/auth/register", data),

  login: (data: LoginPayload) => api.post("/auth/login", data),

  me: () => api.get("/auth/me"),
};
