"use client";

import SessionItem from "../sessions/SessionItem";
import { Session } from "../../types/session";
import styles from "../../styles/shared/CardList.module.css";

export default function SessionsList({
  sessions,
  isAgenda = false,
}: {
  sessions: Session[];
  isAgenda?: boolean;
}) {
  if (!sessions.length) {
    return (
      <p className={styles.empty}>
        {isAgenda ? "Your agenda is empty." : "No sessions found."}
      </p>
    );
  }

  return (
    <div className={styles.sessionList}>
      {sessions.map((session: any) => (
        <div key={session.id} className={styles.sessionItem}>
          <SessionItem
            session={session}
            showConflict={isAgenda ? session.conflict : false}
          />
        </div>
      ))}
    </div>
  );
}
