import { useAppDispatch } from "@/lib/redux/hooks";
import { onAddTicketsOnMount } from "@/lib/redux/tickets/ticketSlice";
import type { TicketType } from "@/types/tickets-types";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useEffect } from "react";
import DashboardNavbar from "../ui/DashboardNavbar";
import Footer from "../ui/Footer";
import { getUser } from "../utils/getUser";

export default function AppLayout() {
  const user = getUser();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const ticketData: TicketType[] = JSON.parse(
      localStorage.getItem("tickets") ?? "[]"
    );

    const userTicketData = ticketData?.filter(
      (ticket) => ticket?.userId === user?.id
    );

    dispatch(onAddTicketsOnMount(userTicketData));
  }, [dispatch, user?.id]);

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
