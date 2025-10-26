import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getUser } from "../../utils/getUser";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Dashboard() {
  const user = getUser();

  const overviewData = [
    { name: "total tickets", desc: "All time tickets created", count: 0 },
    { name: "Open tickets", desc: "Waiting to be started", count: 0 },
    { name: "In Progress", desc: "Currently being worked on", count: 0 },
    { name: "Resolved", desc: "Successfully completed", count: 0 },
  ];

  return (
    <div className="py-3">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back, {user?.name}</CardTitle>
          <CardDescription className="text-lg">
            Here's an overview of your ticket management system
          </CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
          {overviewData?.map((data) => (
            <Card className="flex items-center gap-4 flex-row  justify-between pr-6">
              <CardHeader className="w-full">
                <CardTitle className="text-lg capitalize">
                  {data.name}
                </CardTitle>
                <CardDescription>{data?.desc}</CardDescription>
              </CardHeader>
              <h1 className="text-3xl font-bold">{data.count}</h1>
            </Card>
          ))}
        </CardContent>
        <CardHeader className="mt-10 mb-12">
          <div className="border rounded-xl flex-col gap-3 py-8 px-6 flex items-center text-center sm:items-start sm:text-left">
            <h2 className="text-2xl font-bold">
              Ready to manage your tickets?
            </h2>
            <p className="text-neutral-600 text-[15px]">
              View all tickets, create new ones, or update existing tickets
            </p>

            <Link to="/tickets">
              <Button className="bg-blue-700 text-white mt-4">
                Go to Ticket Management{" "}
                <ArrowRight className="size-5 text-white" />
              </Button>
            </Link>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
