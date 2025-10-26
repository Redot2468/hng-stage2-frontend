import type { User } from "../types/auth-types";

export function getUser(): Omit<User, "password"> | null {
  const unparsedSessionFromls = localStorage.getItem("ticketapp_session");

  if (unparsedSessionFromls) {
    return JSON.parse(unparsedSessionFromls);
  } else {
    return null;
  }
}

export function logoutUser() {
  localStorage.removeItem("ticketapp_session");
}
