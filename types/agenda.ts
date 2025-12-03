import { Session } from "./session";

export interface AgendaSession extends Session {
  conflict: boolean;
}
