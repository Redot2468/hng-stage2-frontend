import { createFileRoute } from "@tanstack/react-router";
import SignupForm from "../components/auth/SignupForm";

export const Route = createFileRoute("/_auth/auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center h-full py-12 border ">
      <SignupForm />
    </div>
  );
}
