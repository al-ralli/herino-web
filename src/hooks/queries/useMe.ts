import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/auth.store";
import { getMe } from "@/api/auth/auth.service";

export const useMe = () => {
  const { token } = useAuthStore();

  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    enabled: !!token,
  });
};
