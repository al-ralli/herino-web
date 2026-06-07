import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth/auth.service";
import type { LoginDto } from "@/api/auth/auth.service";

const useLoginMutation = () => {
  return useMutation({
    mutationFn: (dto: LoginDto) => login(dto),
  });
};

export { useLoginMutation };
