import { Plus } from "lucide-react";
import { useAppDispatch } from "../../lib/redux/hooks";
import { onToggleTicketModal } from "../../lib/redux/tickets/ticketSlice";
import { Button } from "../ui/button";

export default function NoTickets() {
  const dispatch = useAppDispatch();

  const onCreateTicket = () => dispatch(onToggleTicketModal(true));

  return (
    <div className="flex items-center flex-col justify-center  gap-3">
      <p className="bg-gray-100 size-[80px] rounded-full flex items-center justify-center">
        <Plus className="text-neutral-400 size-12" />
      </p>

      <p className="text-neutral-800 text-lg font-medium">No tickets yet</p>
      <p className="text-neutral-700 text-[15px]">
        Get started by creating your first ticket.
      </p>

      <Button
        className="bg-blue-700 text-base font-normal mt-6 w-fit  py-5 px-8 text-[15px] card"
        onClick={onCreateTicket}
      >
        <Plus /> Create Your First Ticket
      </Button>
    </div>
  );
}
