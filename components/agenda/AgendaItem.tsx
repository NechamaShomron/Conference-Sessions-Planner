"use client";
import Link from "next/link";
import { AgendaSession } from "../../types/agenda";
import styles from "../../styles/shared/Card.module.css";
import SessionInfo from "../Shared/SessionInfo";

interface Props {
  session: AgendaSession;
}

export default function AgendaItem({ session }: Props) {
  return (
    <Link href={`/sessions/${session.id}`} className={styles.cardLink}>
      <div
        className={`${styles.card} ${session.conflict ? styles.conflict : ""}`}
      >
        <SessionInfo session={session} showTitle={true} />
        {session.conflict && (
          <p className={styles.warning}>⚠️ Time conflict!</p>
        )}
      </div>
    </Link>
  );
}
