import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";
import { useMe } from "@/hooks/queries/useMe";
import type { UserRole } from "@/types/auth/types";

interface ProtectedRouteProps {
  role?: UserRole;
}

const ProtectedRoute = ({ role }: ProtectedRouteProps) => {
  const { token } = useAuthStore();
  const { data: user, isLoading } = useMe();

  if (!token) return <Navigate to="/login" replace />;
  if (isLoading) return null;
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/" replace />;

  return <Outlet />;
};

const UnauthenticatedRoute = () => {
  const { token } = useAuthStore();

  if (token) return <Navigate to="/dashboard" replace />;

  return <Outlet />;
};

export { ProtectedRoute, UnauthenticatedRoute };
