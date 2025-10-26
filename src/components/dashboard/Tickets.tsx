import { Plus } from "lucide-react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import {
  getTicket,
  onAddTicketsOnMount,
  onToggleTicketModal,
} from "../../lib/redux/tickets/ticketSlice";
import type { TicketType } from "../../types/tickets-types";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import NoTickets from "./NoTickets";
import TicketCard from "./TicketCard";
import TicketForm from "./TicketForm";

export default function Tickets() {
  const dispatch = useAppDispatch();
  const { tickets } = useAppSelector(getTicket);

  const onCreateTicket = () => dispatch(onToggleTicketModal(true));

  useEffect(() => {
    const ticketData: TicketType[] = JSON.parse(
      localStorage.getItem("tickets") ?? "[]"
    );
    dispatch(onAddTicketsOnMount(ticketData));
  }, [dispatch]);

  return (
    <div className="py-2 pb-12">
      <Card className="border-0 shadow-none">
        <div className="flex flex-col sm:flex-row sm:pr-6">
          <CardHeader className="w-full">
            <CardTitle className="text-[28px] font-bold">
              Ticket Management
            </CardTitle>
            <CardDescription className="text-lg">
              Create, view, edit and manage your tickets
            </CardDescription>
          </CardHeader>

          <Button
            className="bg-blue-700 text-base font-normal mt-6 w-fit ml-6 sm:ml-0 py-5 px-8 text-[15px] card"
            onClick={onCreateTicket}
          >
            <Plus /> Create Ticket
          </Button>
        </div>

        <CardContent className="pt-8 ">
          {tickets?.length > 0 ? (
            <div className="grid-cols-1 md:grid-cols-2 gap-5 grid lg:grid-cols-3">
              {tickets.map((ticket) => (
                <TicketCard ticket={ticket} />
              ))}
            </div>
          ) : (
            <NoTickets />
          )}
        </CardContent>
      </Card>

      <TicketForm />
    </div>
  );
}
