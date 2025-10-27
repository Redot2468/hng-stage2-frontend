import { getUser } from "@/utils/getUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import {
  getTicket,
  onAddTicket,
  onToggleTicketModal,
  onUpdateTicket,
} from "../../lib/redux/tickets/ticketSlice";
import {
  TicketSchema,
  type TicketSchemaType,
} from "../../lib/schema/ticket-schema";
import { Route } from "../../routes/_app.tickets";
import type { TicketType } from "../../types/tickets-types";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

// if there's a ticket to edit, update ticket, else, create new,
// if i unblur modal or, successfully update ticket, remove id from url
// delete data,
// clear landing page.

export default function TicketForm() {
  const user = getUser();
  const { isTicketModalOpen } = useAppSelector(getTicket);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id: ticketToEditId } = Route.useSearch();
  const form = useForm<TicketSchemaType>({
    resolver: zodResolver(TicketSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "open",
      priority: "medium",
    },
  });

  function onSubmit(formData: TicketSchemaType) {
    const newTicket = {
      id: crypto.randomUUID(),
      ...formData,
      userId: user?.id,
    };

    const tickets: TicketType[] = JSON.parse(
      localStorage.getItem("tickets") ?? "[]"
    );

    if (ticketToEditId) {
      const updateTickets = tickets?.map((ticket) =>
        ticket.id === ticketToEditId ? { ...ticket, ...formData } : ticket
      );

      localStorage.setItem("tickets", JSON.stringify(updateTickets));

      dispatch(
        onUpdateTicket({
          ticketToEditId,
          formData: { ...formData, userId: user?.id },
        })
      );

      toast.success("Ticket successfully updated");
      form.reset({
        title: "",
        description: "",
        status: "open",
        priority: "medium",
      });
      dispatch(onToggleTicketModal(false));
      navigate({
        to: "/tickets",
      });

      return;
    }

    // db
    localStorage.setItem("tickets", JSON.stringify([newTicket, ...tickets]));

    // optimistic
    dispatch(onAddTicket(newTicket));

    toast.success("Ticket Created Successfully");
    form.reset();

    dispatch(onToggleTicketModal(false));
  }

  function onCloseModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === e.currentTarget) {
      if (ticketToEditId) {
        navigate({
          to: "/tickets",
        });
      }

      dispatch(onToggleTicketModal(false));
    }
  }

  useEffect(() => {
    const ticketData: TicketType[] = JSON.parse(
      localStorage.getItem("tickets") ?? "[]"
    );

    const getTicketToEdit = ticketData.find(
      (ticket: TicketType) => ticket.id === ticketToEditId
    );

    if (getTicketToEdit) {
      form.reset(getTicketToEdit);
    } else {
      form.reset({
        title: "",
        description: "",
        status: "open",
        priority: "medium",
      });
    }
  }, [ticketToEditId, form]);

  return (
    <AnimatePresence>
      {isTicketModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 0.1 }}
          className="w-screen h-screen bg-black/20 backdrop-blur-xs fixed top-0 flex items-center justify-center px-5"
          onClick={(e) => onCloseModal(e)}
        >
          <Card
            className={`max-w-[500px] w-full card ${isTicketModalOpen ? "scale-100" : "scale-80"} transition-all 0.3s`}
          >
            <CardHeader className="text-center">
              <CardTitle className="capitalize text-lg ">
                {ticketToEditId ? "Edit ticket" : "create new ticket"}
              </CardTitle>
              <CardDescription>
                {ticketToEditId
                  ? "Update the ticket details below"
                  : " Fill in the details to create a new ticket"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form action="" onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                  <Controller
                    name="title"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="title">
                          <span>Title</span>
                          <span className="-ml-1 text-red-500">*</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id="title"
                          aria-invalid={fieldState.invalid}
                          placeholder="Title of the ticket"
                          autoComplete="off"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  <Controller
                    name="description"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="description">
                          Description
                        </FieldLabel>
                        <Textarea
                          {...field}
                          id="description"
                          placeholder="Details about the ticket..."
                          rows={5}
                          className="h-[100px]"
                          aria-invalid={fieldState.invalid}
                          autoComplete="off"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  <div className="flex items-center gap-4 card">
                    <Controller
                      name="status"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="status">
                            Status <span className="text-red-500 -ml-1">*</span>
                          </FieldLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="capitalize">
                              <SelectValue
                                className="capitalize"
                                placeholder="open"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Status</SelectLabel>
                                {["open", "in_progress", "closed"].map(
                                  (status, idx) => (
                                    <SelectItem
                                      value={status}
                                      key={idx}
                                      className="capitalize"
                                    >
                                      {status.replace("_", " ")}
                                    </SelectItem>
                                  )
                                )}
                              </SelectGroup>
                            </SelectContent>
                          </Select>

                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      name="priority"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="priority">Priority</FieldLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="capitalize">
                              <SelectValue
                                className="capitalize"
                                placeholder="open"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Status</SelectLabel>
                                {["low", "medium", "high"].map(
                                  (status, idx) => (
                                    <SelectItem
                                      value={status}
                                      key={idx}
                                      className="capitalize"
                                    >
                                      {status}
                                    </SelectItem>
                                  )
                                )}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </div>
                </FieldGroup>

                <Button className="w-full bg-blue-700 mt-6" type="submit">
                  {ticketToEditId ? "Update Ticket" : "Create Ticket"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
