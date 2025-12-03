"use client";

import { useEffect, useState } from "react";
import SessionsList from "../../components/sessions/SessionsList";
import { getAgenda } from "../../lib/agenda";
import { getAgendaSessions } from "../../lib/sessions";
import { Session } from "../../types/session";
import styles from "../../styles/shared/CardList.module.css";

export default function AgendaPage() {
  const [agendaSessions, setAgendaSessions] = useState<Session[]>([]);

  useEffect(() => {
    const ids = getAgenda();
    setAgendaSessions(getAgendaSessions(ids));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Agenda</h1>
      <SessionsList sessions={agendaSessions} isAgenda />
    </div>
  );
}
