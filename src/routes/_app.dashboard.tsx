import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../components/dashboard/Dashboard";

export const Route = createFileRoute("/_app/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
