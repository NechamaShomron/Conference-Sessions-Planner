"use client";

import { useState, useEffect } from "react";
import { isInAgenda, toggleAgenda } from "../../lib/agenda";
import styles from "../../styles/AgendaButton.module.css";

interface AgendaButtonProps {
  sessionId: string;
}

export default function AgendaButton({ sessionId }: AgendaButtonProps) {
  const [inAgenda, setInAgenda] = useState(false);

  useEffect(() => {
    setInAgenda(isInAgenda(sessionId));
  }, [sessionId]);

  const handleClick = () => {
    toggleAgenda(sessionId);
    setInAgenda(!inAgenda);
  };

  return (
    <button onClick={handleClick} className={styles.agendaButton}>
      {inAgenda ? "❤️" : "🤍"}
      <span className={styles.tooltip}>{inAgenda ? "Remove" : "Add"}</span>
    </button>
  );
}
