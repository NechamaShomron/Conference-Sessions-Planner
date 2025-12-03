"use client";

import { useEffect, useState } from "react";
import { getAgendaSessions } from "../../lib/sessions";
import { getAgenda } from "../../lib/agenda";
import { AgendaSession } from "../../types/agenda";
import AgendaItem from "./AgendaItem";
import styles from "../../styles/shared/CardList.module.css";

export default function AgendaList() {
  const [agendaSessions, setAgendaSessions] = useState<AgendaSession[]>([]);

  useEffect(() => {
    const agendaIds = getAgenda();
    const sessions = getAgendaSessions(agendaIds);
    setAgendaSessions(sessions);
  }, []);

  if (agendaSessions.length === 0) {
    return <p className={styles.empty}>Your agenda is empty.</p>;
  }

  return (
    <div className={styles.list}>
      {agendaSessions.map((session) => (
        <AgendaItem key={session.id} session={session} />
      ))}
    </div>
  );
}
