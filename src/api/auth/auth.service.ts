import { herinoClient } from "@/api/clients/herino.client";
import { ENDPOINTS } from "@/api/endpoints";
import type { AuthUser } from "@/types/auth/types";
import { useAuthStore } from "@/store/auth.store";

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface AuthTokenResult {
  access_token: string;
}

export async function login(dto: LoginDto): Promise<AuthUser> {
  const { data } = await herinoClient.post<AuthTokenResult>(
    ENDPOINTS.auth.login(),
    dto,
  );
  useAuthStore.getState().setToken(data.access_token);

  const user = await getMe();
  return user;
}

export async function register(dto: RegisterDto): Promise<AuthUser> {
  const { data } = await herinoClient.post<AuthTokenResult>(
    ENDPOINTS.auth.register(),
    dto,
  );

  useAuthStore.getState().setToken(data.access_token);

  const user = await getMe();
  return user;
}

export async function getMe(): Promise<AuthUser> {
  const { data } = await herinoClient.get<AuthUser>(ENDPOINTS.auth.me());
  return data;
}
