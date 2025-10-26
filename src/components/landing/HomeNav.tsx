import { Button } from "@/components/ui/button";
import { useNavFixedOnScroll } from "@/hooks/useNavFixed";
import { Link } from "@tanstack/react-router";

export default function HomeNav() {
  const { isNavFixed } = useNavFixedOnScroll();

  return (
    <nav
      className={` border-neutral-200 h-[70px] font-bold flex items-center px-6  justify-between ${isNavFixed ? "fixed w-full bg-white/30 z-50 backdrop-blur-xs" : "bg-white static"}`}
    >
      <div className="flex items-center gap-4">
        <img src="/logo-1.png" alt="" className="size-[30px]" />
        <h1 className="text-xl text-neutral-800">TicketFlow</h1>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/auth/login">
          <p className={` font-medium text-neutral-800`}>Login</p>
        </Link>

        <Link to="/auth/signup">
          <Button
            className={`${isNavFixed ? "bg-white text-neutral-700" : "bg-blue-500"}  hover:bg-blue-500 hover:text-white`}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}
