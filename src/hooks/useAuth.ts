import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";
import { useMe } from "@/hooks/queries/useMe";

export const useAuth = () => {
  const { token, logout } = useAuthStore();
  const { data: user } = useMe();

  const navigate = useNavigate();

  const appLogout = () => {
    logout();
    navigate("/");
  };

  return {
    user,
    token,
    isAuthenticated: !!token,
    isAdmin: user?.role === "ADMIN",
    appLogout,
  };
};
