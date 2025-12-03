"use client";
import Link from "next/link";
import { AgendaSession } from "../../types/agenda";
import { formatTimeRange } from "../../lib/formatTime";
import styles from "../../styles/shared/Card.module.css";

interface Props {
  session: AgendaSession;
}

export default function AgendaItem({ session }: Props) {
  return (
    <Link href={`/sessions/${session.id}`} className={styles.cardLink}>
      <div
        className={`${styles.card} ${session.conflict ? styles.conflict : ""}`}
      >
        <h3 className={styles.sessionTitle}>{session.title}</h3>
        <p className={styles.field}>
          <strong>Speaker:</strong> {session.speaker}
        </p>
        <p className={styles.field}>
          <strong>Track:</strong> {session.track}
        </p>
        <p className={styles.field}>
          <strong>Time:</strong>{" "}
          {formatTimeRange(session.startTime, session.endTime)}
        </p>
        <p className={styles.field}>
          <strong>Room:</strong> {session.room}
        </p>
        {session.conflict && (
          <p className={styles.warning}>⚠️ Time conflict!</p>
        )}
      </div>
    </Link>
  );
}
