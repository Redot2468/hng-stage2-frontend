import Banner from "@/components/landing/Banner";
import HomeFooter from "@/components/landing/HomeFooter";
import HomeNav from "@/components/landing/HomeNav";
import Ready from "@/components/landing/Ready";
import Why from "@/components/landing/Why";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-blue-500 max-w-[1440px] mx-auto">
      <header>
        <HomeNav />
        <Banner />
      </header>

      <main>
        <Why />
        <Ready />
      </main>

      <HomeFooter />
    </div>
  );
}
