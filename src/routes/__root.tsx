import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Provider } from "react-redux";
import { Toaster } from "../components/ui/sonner";
import { store } from "../lib/redux/store";

export const Route = createRootRoute({
  component: () => (
    <>
      <Provider store={store}>
        <Outlet />
        <TanStackRouterDevtools />
        <Toaster position="top-center" />
      </Provider>
    </>
  ),
});
