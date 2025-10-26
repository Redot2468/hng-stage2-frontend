import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import AuthNavbar from "../ui/AuthNavbar";
import { getUser } from "../utils/getUser";

export default function AuthLayout() {
  return (
    <div className="flex flex-col">
      <AuthNavbar />
      <Outlet />
    </div>
  );
}

export const Route = createFileRoute("/_auth")({
  beforeLoad: async () => {
    if (getUser()) {
      throw redirect({
        to: "/dashboard",
      });
    }
  },
  component: AuthLayout,
});
