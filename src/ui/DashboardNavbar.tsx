import { Link, useNavigate } from "@tanstack/react-router";
import { LogOut, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useNavFixedOnScroll } from "../hooks/useNavFixed";
import { LINKS } from "../utils/constants";
import { logoutUser } from "../utils/getUser";

export default function DashboardNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isNavFixed } = useNavFixedOnScroll();

  const navigate = useNavigate();

  const handleNavToggle = () => setIsNavOpen((cur) => !cur);
  const onLogout = () => {
    logoutUser();
    navigate({ to: "/" });
  };

  return (
    <nav
      className={`${isNavFixed ? "fixed w-full top-0" : "static"} transition-all`}
    >
      <div className="border-b border-neutral-200 h-[70px] font-bold flex items-center px-6 bg-white/30 backdrop-blur-xs justify-between z-40">
        <div className="flex items-center gap-4">
          <img src="/logo-1.png" alt="" className="size-[30px]" />
          <h1 className="text-xl text-neutral-800">TicketMS</h1>
        </div>

        <ul className=" items-center gap-4 sm:gap-6 hidden sm:flex">
          {LINKS?.map((link, idx) => (
            <Link key={idx} to={link.href}>
              <li className="text-[15px] font-normal capitalize hover:underline ">
                {link.name}
              </li>
            </Link>
          ))}

          <LogOut
            className="
          cursor-pointer size-5"
            onClick={onLogout}
          />
        </ul>

        <button onClick={handleNavToggle} className="sm:hidden">
          {isNavOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* mobile nav */}
      <AnimatePresence>
        <motion.ul
          animate={{
            height: isNavOpen ? "200px" : "0",
            paddingTop: isNavOpen ? "32px" : "0",
            paddingBottom: isNavOpen ? "32px" : "0",
          }}
          transition={{ ease: "easeIn", duration: 0.15 }}
          className={`  px-6 flex flex-col gap-8 bg-white shadow-md items-center fixed w-full sm:hidden overflow-hidden`}
        >
          {LINKS?.map((link, idx) => (
            <Link key={idx} to={link.href}>
              <li
                onClick={() => setIsNavOpen(false)}
                className="text-[15px] font-normal capitalize hover:underline "
              >
                {link.name}
              </li>
            </Link>
          ))}

          <li
            className="flex items-center gap-3 cursor-pointer"
            onClick={onLogout}
          >
            <LogOut
              className="
          cursor-pointer size-5"
            />{" "}
            <span>Logout</span>
          </li>
        </motion.ul>
      </AnimatePresence>
    </nav>
  );
}
