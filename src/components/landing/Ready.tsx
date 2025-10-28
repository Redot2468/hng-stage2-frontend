import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export default function Ready() {
  return (
    <div className="bg-neutral-200">
      <Card className="bg-neutral-50 border-0 shadow-none">
        <CardHeader className="mt-10 mb-12 ">
          <div className=" rounded-xl flex-col gap-3 py-8 px-6 flex items-center text-center  bg-white">
            <h2 className="text-3xl md:text-[33px] font-bold text-neutral-800">
              Ready to manage your tickets?
            </h2>
            <p className="text-neutral-600 text-lg mt-2">
              Join thousands of teams already using TicketMS to streamline their
              support operations.
            </p>

            <Link to="/auth/signup">
              <Button className="bg-blue-700 text-white mt-4 px-10 h-[42px] w-[150px]">
                Get Started <ArrowRight className="size-5 text-white" />
              </Button>
            </Link>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
