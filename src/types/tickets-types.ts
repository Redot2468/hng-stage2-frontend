import type { TicketSchemaType } from "../lib/schema/ticket-schema";

export interface TicketType extends TicketSchemaType {
  id: string;
  userId?: string;
}
