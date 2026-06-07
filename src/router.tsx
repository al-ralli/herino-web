import { createBrowserRouter } from "react-router-dom";
import {
  ProtectedRoute,
  UnauthenticatedRoute,
} from "@/components/ProtectedRoute";
import HomePage from "@/pages/public/HomePage";
import LoginPage from "@/pages/public/LoginPage";
import RegisterPage from "@/pages/public/RegisterPage";
import DashboardPage from "@/pages/client/DashboardPage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },

  {
    element: <UnauthenticatedRoute />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },

  {
    element: <ProtectedRoute role="CLIENT" />,
    children: [{ path: "/dashboard", element: <DashboardPage /> }],
  },

  {
    element: <ProtectedRoute role="ADMIN" />,
    children: [{ path: "/admin", element: <div>Admin</div> }],
  },
]);
