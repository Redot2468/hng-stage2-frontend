import z from "zod";

export const TicketSchema = z.object({
  title: z.string().min(1, "Ticket title is required"),
  status: z.enum(
    ["open", "in_progress", "closed"],
    "Ticket status is required"
  ),
  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional(),

  priority: z.enum(["low", "medium", "high"]).optional(),
});

export type TicketSchemaType = z.infer<typeof TicketSchema>;
