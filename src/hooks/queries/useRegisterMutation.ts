import { useMutation } from "@tanstack/react-query";
import { register } from "@/api/auth/auth.service";
import type { RegisterDto } from "@/api/auth/auth.service";

const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (dto: RegisterDto) => register(dto),
  });
};

export { useRegisterMutation };
