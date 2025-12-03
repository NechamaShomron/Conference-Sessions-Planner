const AGENDA_KEY = "agenda";

export function getAgenda(): string[] {
  const stored = localStorage.getItem(AGENDA_KEY) || "[]";
  return JSON.parse(stored);
}

export function isInAgenda(sessionId: string): boolean {
  return getAgenda().includes(sessionId);
}

export function addToAgenda(sessionId: string) {
  const agenda = getAgenda();
  if (!agenda.includes(sessionId)) {
    agenda.push(sessionId);
    localStorage.setItem(AGENDA_KEY, JSON.stringify(agenda));
  }
}

export function removeFromAgenda(sessionId: string) {
  let agenda = getAgenda();
  agenda = agenda.filter((id) => id !== sessionId);
  localStorage.setItem(AGENDA_KEY, JSON.stringify(agenda));
}

export function toggleAgenda(sessionId: string) {
  if (isInAgenda(sessionId)) {
    removeFromAgenda(sessionId);
  } else {
    addToAgenda(sessionId);
  }
}
