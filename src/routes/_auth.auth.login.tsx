import { createFileRoute } from "@tanstack/react-router";
import LoginForm from "../components/auth/LoginForm";

export const Route = createFileRoute("/_auth/auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center h-full py-12 border ">
      <LoginForm />
    </div>
  );
}
