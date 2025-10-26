import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export default function Banner() {
  return (
    <div>
      <div className="bg-[url(/public/wave.svg)] bg-no-repeat bg-cover   border-black h-[700px] px-4">
        <div className="max-w-[540px] md:max-w-[700px] h-[500px] flex flex-col items-center gap-6  mx-auto justify-center">
          <h1 className="text-[35px] md:text-5xl font-bold text-white text-center">
            Manage Your Tickets with Ease
          </h1>

          <p className="text-gray-100 text-center text-lg md:text-xl ">
            Streamline your workflow with our powerful ticket management system.
            Track, organize, and resolve issues faster than ever before.
          </p>

          <div className="flex flex-col gap-5 items-center mt-2 md:flex-row">
            <Link to="/auth/signup">
              <Button className="bg-white font-medium text-neutral-600  text-lg px-8 h-[45px]  hover:bg-blue-500 hover:text-white">
                Get Started
              </Button>
            </Link>
            <Link to="/auth/login">
              {" "}
              <Button className="bg-white/10 backdrop-blur-md font-medium px-7 text-lg h-[43px] hover:bg-blue-500 hover:text-white">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
