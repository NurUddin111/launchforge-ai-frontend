export type Role = "USER" | "ADMIN";

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  imageUrl: string | null;
  createdAt: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: IUser;
}

export interface LoginResponse {
  accessToken: string;
}

export interface AuthState {
  user: IUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  setUser: (user: IUser | null) => void;
  setToken: (token: string | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}
