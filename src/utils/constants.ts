export const LINKS = [
  { name: "dashboard", href: "/dashboard" },
  { name: "tickets", href: "/tickets" },
];

import { CheckCircle, Edit, Users } from "lucide-react";

export const WHY_TEXT = [
  {
    logo: CheckCircle,
    title: "Streamlined Ticket Management",
    description:
      "Organize, prioritize, and track tickets with ease using our intuitive interface designed for efficiency.",
    color: "bg-green-700",
  },
  {
    logo: Edit,
    title: "Customizable Workflows",
    description:
      "Adapt TicketMS to fit your team's unique processes with flexible workflow configurations and automation options.",
    color: "bg-amber-700",
  },
  {
    logo: Users,
    title: "Real-Time Collaboration",
    description:
      "Enhance team communication and collaboration with real-time updates, comments, and notifications on ticket status changes.",
    color: "bg-purple-700",
  },
];
