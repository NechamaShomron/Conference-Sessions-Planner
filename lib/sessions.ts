import sessions from "../data/sessions.json";
import { Session } from "../types/session";
import { AgendaSession } from "../types/agenda";
import { timesOverlap } from "../lib/formatTime";

export function getSessions(): Session[] {
  return sessions;
}

export function getSessionById(id: string): Session | undefined {
  return sessions.find((s) => s.id === id);
}

export function getAgendaSessions(agendaIds: string[]): AgendaSession[] {
  const agendaSessions = sessions.filter((s) => agendaIds.includes(s.id));

  return agendaSessions.map((s) => ({
    ...s,
    conflict: agendaSessions.some(
      (other) => other.id !== s.id && timesOverlap(s, other)
    ),
  }));
}
