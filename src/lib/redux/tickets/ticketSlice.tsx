import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TicketType } from "../../../types/tickets-types";
import type { RootState } from "../store";

interface initialStateType {
  isTicketModalOpen: boolean;
  tickets: TicketType[];
}

const initialState: initialStateType = {
  isTicketModalOpen: false,
  tickets: [],
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    onDeleteTicket(state, action: PayloadAction<string>) {
      state.tickets = state.tickets.filter(
        (ticket) => ticket.id !== action.payload
      );
    },
    onUpdateTicket(
      state,
      action: PayloadAction<{
        ticketToEditId: string;
        formData: Omit<TicketType, "id">;
      }>
    ) {
      state.tickets = state.tickets.map((ticket) =>
        ticket.id === action.payload.ticketToEditId
          ? { ...ticket, ...action.payload.formData }
          : ticket
      );
    },
    onAddTicketsOnMount(state, action: PayloadAction<TicketType[]>) {
      state.tickets = action.payload;
    },
    onAddTicket(state, action: PayloadAction<TicketType>) {
      state.tickets = [action.payload, ...state.tickets];
    },
    onToggleTicketModal(state, action: PayloadAction<boolean | undefined>) {
      if (action.payload === undefined) {
        state.isTicketModalOpen = !state.isTicketModalOpen;
      } else {
        state.isTicketModalOpen = action.payload;
      }
    },
  },
});

export const {
  onToggleTicketModal,
  onAddTicket,
  onAddTicketsOnMount,
  onUpdateTicket,
  onDeleteTicket,
} = ticketSlice.actions;

export const getTicket = (state: RootState) => state.ticket;

export default ticketSlice.reducer;
