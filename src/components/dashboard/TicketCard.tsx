import { useNavigate } from "@tanstack/react-router";
import { Pencil, Trash } from "lucide-react";
import { toast } from "sonner";
import { useAppDispatch } from "../../lib/redux/hooks";
import {
  onDeleteTicket,
  onToggleTicketModal,
} from "../../lib/redux/tickets/ticketSlice";
import { Route } from "../../routes/_app.tickets";
import type { TicketType } from "../../types/tickets-types";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function TicketCard({ ticket }: { ticket: TicketType }) {
  let statusColor = "";
  const navigate = useNavigate({ from: Route.fullPath });
  const dispatch = useAppDispatch();

  switch (ticket?.status) {
    case "open":
      statusColor = "bg-green-500";
      break;

    case "in_progress":
      statusColor = "bg-amber-500";
      break;

    case "closed":
      statusColor = "bg-gray-500";
      break;

    default:
      break;
  }

  function handleEdit() {
    navigate({
      search: (prev) => ({
        ...prev,
        id: ticket?.id,
      }),
    });

    dispatch(onToggleTicketModal(true));
  }

  function handleDelete() {
    const ticketsFromDb: TicketType[] = JSON.parse(
      localStorage.getItem("tickets") ?? "[]"
    );

    const ticketsAfterDeletion = ticketsFromDb?.filter(
      (dbTicket) => dbTicket?.id !== ticket.id
    );

    localStorage.setItem("tickets", JSON.stringify(ticketsAfterDeletion));

    // optimistic delete
    dispatch(onDeleteTicket(ticket?.id));

    toast.success("Ticket deleted successfully");
  }

  return (
    <Card key={ticket.id}>
      <div className="flex items-center justify-between px-6">
        <p
          className={`${statusColor} text-white font-medium text-xs rounded-3xl capitalize px-3 w-fit py-0.5`}
        >
          {ticket?.status}
        </p>

        <p
          className={`border border-amber-800 text-amber-800  font-medium text-xs rounded-3xl capitalize px-3 w-fit py-0.5`}
        >
          {ticket?.priority}
        </p>
      </div>

      <div className="sm:flex sm:items-center sm:justify-between">
        <CardHeader className="w-[80%]">
          <CardTitle className="text-lg font-semibold">
            {ticket?.title}
          </CardTitle>
          <CardDescription>{ticket?.description}</CardDescription>
        </CardHeader>

        <div className="px-6 mt-4 flex items-center">
          <Button variant="secondary" onClick={handleEdit}>
            <Pencil />
          </Button>
          <Button variant="destructive" className="ml-4" onClick={handleDelete}>
            <Trash />
          </Button>
        </div>
      </div>
    </Card>
  );
}
