import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import DashboardNavbar from "../ui/DashboardNavbar";
import Footer from "../ui/Footer";
import { getUser } from "../utils/getUser";

export default function AppLayout() {
  return (
    <div className=" min-h-screen  flex flex-col max-w-[1440px] mx-auto">
      <header>
        <DashboardNavbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/_app")({
  beforeLoad: async ({ location }) => {
    if (!getUser()) {
      throw redirect({
        to: "/auth/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: AppLayout,
});
