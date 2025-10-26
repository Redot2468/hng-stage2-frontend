import { createFileRoute } from "@tanstack/react-router";
import Tickets from "../components/dashboard/Tickets";

export const Route = createFileRoute("/_app/tickets")({
  component: RouteComponent,
  validateSearch: (search): { id?: string } => {
    return {
      id: (search?.id as string) || "",
    };
  },
});

function RouteComponent() {
  return (
    <div>
      <Tickets />
    </div>
  );
}
