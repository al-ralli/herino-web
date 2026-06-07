import { useMutation } from "@tanstack/react-query";
import { register, getMe } from "@/api/auth/auth.service";
import type { RegisterDto } from "@/api/auth/auth.service";

const useRegisterMutation = () => {
  return useMutation({
    mutationFn: async (dto: RegisterDto) => {
      const { access_token } = await register(dto);
      const user = await getMe();
      return { access_token, user };
    },
  });
};

export { useRegisterMutation };
